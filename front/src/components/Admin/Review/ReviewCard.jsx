/* eslint-disable react/prop-types */
const ReviewCard =({review,handlerDesactive})=>{
return(
    <tr key={review.id}>
        <td>{review.field}</td>
        <td>{review.rate}</td>
        <td>{review.description}</td>
        <td>{review.user}</td>
        <td>{review.approved  ? "Activo": "Desactivo"}</td>
        <td>
                <button onClick={()=>handlerDesactive(review.id)}>Desactivar</button>
            </td>
    </tr>
)
}
export default ReviewCard