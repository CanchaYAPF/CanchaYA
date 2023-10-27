const FieldCard = ({field})=>{ // Aquí desestructuramos field de las props

    return(
        <tr key={field.id}>
        <td>{field.name}</td>
        <td>{field.sports}</td>
        <td>{field.city}</td>
        <td>{field.address}</td>
        <td>{field.phone}</td>
        <td>{field.status ? "Activo": "Desactivo"}</td>
        </tr>
    )

}
export default FieldCard