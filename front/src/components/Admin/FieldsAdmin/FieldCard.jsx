const FieldCard = (field)=>{

    return(
        <tr key={field.id}>
        <td>{field.name}</td>
        <td>{field.sports}</td>
        <td>{field.image}</td>
        <td>{field.city}</td>
        <td>{field.address}</td>
        <td>{field.phone}</td>
        <td>{field.price}</td>
        <td>{field.paymentMethod}</td>
        <td>{field.service}</td>
        <td>{field.status ? "Activo": "Desactivo"}</td>
        </tr>
    )

}
export default FieldCard