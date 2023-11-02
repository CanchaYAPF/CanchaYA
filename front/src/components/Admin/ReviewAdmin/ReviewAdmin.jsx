import {useDispatch,useSelector} from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {getReviewsAdmin} from "../../../Redux/actions/admin_actions";
import ReviewCard from "./ReviewCard"
import axios from "axios";

const ReviewAdmin =()=>{

const adminReview = useSelector(state => state.adminReview);

const navigate= useNavigate();
const dispatch=useDispatch();
const jwtToken = sessionStorage.getItem(`token`);
const googleToken= sessionStorage.getItem('googleToken');

useEffect(()=>{
 if(adminReview.length === 0 ){
    dispatch(getReviewsAdmin());
    if (jwtToken === null && googleToken===null) navigate('/login');
 }
},[dispatch])

const handlerDesactive = async(id)=>{
    try {
       const {data} = await axios.patch(`https://canchasyaback.onrender.com/admin/review/${id}`) 
       dispatch(getReviewsAdmin())
    } catch (error) {
        console.log(error)
    }
}

   return(
    <div>
        <table>
            <thead>
                <tr>
                    <th>Field</th>
                    <th>Rate</th>
                    <th>Description</th>
                    <th>User</th>
                    <th>Status</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
             {adminReview?.map(review => (
                <ReviewCard key={review.id} review={review} handlerDesactive={handlerDesactive} />
             ))}
            </tbody>
        </table>
    </div>
   )
}
export default ReviewAdmin