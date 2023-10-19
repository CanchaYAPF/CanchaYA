import { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { googleSignUp } from "../../../Redux/actions/form_actions"
import GoogleLogin from "react-google-login";//para registro con Google
import { gapi } from "gapi-script"; //para registro con Google

const GoogleSignUp =()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

        //Registro con Google
        const googleId="889605891641-navvi2j6f5q2p56v1nojfo9qi0vugusj.apps.googleusercontent.com"// deberia ir en un archivo env?
        useEffect(()=>{
            const start=()=>{
                gapi.auth2.init({
                    clientId:googleId
                })
            }
            gapi.load("client:auth2",start)
        }, [])
        //Envio de respuesta de google al backend y al sessionStorage
        const responseGoogle = (response)=>{
            const token=response.tokenId;
            console.log("token desde el front:", token)
            try {
                dispatch(googleSignUp("token"))
                sessionStorage.setItem('token',token)
                navigate("/home")
            } catch (error) {
                return error
            }
    
        }

    return(
        <div>
            <GoogleLogin 
                    clientId={googleId}
                    buttonText="Iniciar sesión con Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}/>
        </div>
    )
}
export default GoogleSignUp