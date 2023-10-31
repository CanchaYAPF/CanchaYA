/* eslint-disable react/prop-types */
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
            <button onClick={() => handlerDesactive(field.id)}>Desactivar</button>
            </td>
        </tr>
    )

}
export default FieldCard