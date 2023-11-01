import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getBookings } from "../../../Redux/actions/admin_actions";
import axios from "axios";
import BookingCard from "./BookingCard";

const BookingAdmin = ()=>{
const allBooking = useSelector(state => state.bookingAdmin)

const dispatch= useDispatch();
const navigate= useNavigate();
const jwtToken = sessionStorage.getItem(`token`)
const googleToken= sessionStorage.getItem('googleToken')

useEffect(()=>{
if(allBooking?.length===0){
    dispatch(getBookings())
    if (jwtToken === null && googleToken===null) navigate('/login');
}
},[dispatch])
    return(
        
        <div>
         <table>
            <thead>
                <tr>
                    <th>Dia</th>
                    <th>Hora Inicial</th>
                    <th>Hora Final</th>
                    <th>Tiempo Total</th>
                    <th>A Nombre</th>
                    <th>Nombre de Cancha</th>
                    <th>Id de Reserva</th>
                </tr>
                </thead>
                <tbody>
                    {allBooking?.map(booking =>(
                        <BookingCard key={booking.id} booking={booking}/>
                    ))}
                </tbody>
         </table>
        </div>
    )
}
export default BookingAdmin