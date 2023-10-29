import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import {getField} from "../../../Redux/actions/form_actions"
import FieldCard from "./FieldCard"
import styles from './FieldsAdmin.module.css'; // Importa el archivo CSS

const FieldsAdmin = ()=>{

    const allFields =  useSelector(state=>state.allFieldsBackUp);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const jwtToken = sessionStorage.getItem(`token`)
    const googleToken= sessionStorage.getItem('googleToken')


    useEffect(()=>{
        if(allFields.length===0){
            dispatch(getField())
        if (jwtToken === null && googleToken===null) navigate('/login');
        }

    })
    const handlerDesactive = async (id) => {
        try {
           const {data} = await axios.patch(`http://localhost:3001/admin/fields/${id}`)
           dispatch(getField()); 
        } catch (error) {
           console.log(error)
        }
     };

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
                        <FieldCard key={field.id} field={field} handlerDesactive={handlerDesactive}/> 
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default FieldsAdmin