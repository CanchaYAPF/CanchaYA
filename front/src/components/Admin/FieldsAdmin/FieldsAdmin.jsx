import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {getField} from "../../../Redux/actions/form_actions"
import FieldCard from "./FieldCard"

const FieldsAdmin = ()=>{

    const allFields =  useSelector(state=>state.allFieldsBackUp);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const jwtToken = sessionStorage.getItem(`token`)
    const googleToken= sessionStorage.getItem('googleToken')
    let token= jwtToken ? jwtToken : googleToken

    useEffect(()=>{
        if(allFields.length===0){
            dispatch(getField())
        if (jwtToken === null && googleToken===null) navigate('/login');
        }

    })

    return(
        <div>
            {allFields?.map(field=>(
                <FieldCard key={field.id} field={field}/> // Aquí pasamos el objeto field como una propiedad
            ))}

        </div>
    )
}
export default FieldsAdmin