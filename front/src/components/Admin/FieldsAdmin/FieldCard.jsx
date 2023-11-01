/* eslint-disable react/prop-types */
import style from './FieldsAdmin.module.css'; // Importa el archivo CSS
const FieldCard = ({field, handlerDesactive})=>{ // Aquí desestructuramos field de las props
  console.log(field.status ? "Activo": "Desactivo")
    return(
        <tr key={field.id}>
        <td>{field.name}</td>
        <td>{field.sports}</td>
        <td>{field.city}</td>
        <td>{field.address}</td>
        <td>{field.phone}</td>
        <td>{field.status ? "Activo": "Desactivo"}</td>
        <td>
            <button className={style['btn-table']} onClick={() => handlerDesactive(field.id)}>Desactivar</button>
            </td>
        </tr>
    )

}
export default FieldCard