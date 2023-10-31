
const BookingCard = (booking)=>{

    return(
        <div>
<tr key={booking.id}>
    <td>{booking.day}</td>
    <td>{booking.initialHour}</td>
    <td>{booking.finalHour}</td>
    <td>{booking.totalTime}</td>
</tr>
        </div>
    )
}
export default BookingCard