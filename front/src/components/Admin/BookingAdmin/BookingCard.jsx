
const BookingCard = ({booking})=>{

    return(
    <tr key={booking.id}>
    <td>{booking.day}</td>
    <td>{booking.initialHour}</td>
    <td>{booking.finalHour}</td>
    <td>{booking.totalTime}</td>
    <td>{booking.userName}</td>
    <td>{booking.fieldName}</td>
    <td>{booking.id}</td>
    </tr>
    )
}
export default BookingCard