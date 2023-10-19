import { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import GoogleLogin from "react-google-login";//para registro con Google
import { gapi } from "gapi-script"; //para registro con Google
import axios from "axios"

const GoogleSignUp =()=>{

    const navigate = useNavigate();

        //Registro con Google
        const CLIENT_ID_GOOGLE="889605891641-navvi2j6f5q2p56v1nojfo9qi0vugusj.apps.googleusercontent.com"// deberia ir en un archivo env?
        useEffect(()=>{
            const start=()=>{
                gapi.auth2.init({
                    clientId:CLIENT_ID_GOOGLE
                })
            }
            gapi.load("client:auth2",start)
        }, [])
        //Envio de respuesta de google al backend y al sessionStorage
        const responseGoogle = async (response)=>{
            try {
                await axios.post(`http://localhost:3001/user/googleSingup`, { token:response.tokenId })
                sessionStorage.setItem('googleToken',response.tokenId)
                navigate("/home")
            } catch (error) {
                return error
            }
        }

    return(
        <div>
                    <GoogleLogin 
                    clientId={CLIENT_ID_GOOGLE}
                    buttonText="Iniciar sesión con Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}/>
        </div>
    )
}
export default GoogleSignUp