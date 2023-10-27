import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {getField} from "../../../Redux/actions/form_actions"
import FieldCard from "./FieldCard"
import styles from './FieldsAdmin.module.css'; // Importa el archivo CSS

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
        <div className={styles.tableContainer}> {/* Usa la clase tableContainer */}
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Deportes</th>
                        <th>Ciudad</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {allFields?.map(field=>(
                        <FieldCard key={field.id} field={field}/> 
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default FieldsAdmin