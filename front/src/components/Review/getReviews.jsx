import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../Redux/actions/form_actions';


function Reviews(idField) {
  const dispatch = useDispatch();
  const reviewData = useSelector((state) => state.reviewData);
 
const idF = idField.idField


console.log(idF)
  useEffect(() => {
    dispatch(getReviews(idF));
  }, [dispatch]);

  return (


    <div>
      <h1>Reseñas de la cancha:</h1>
      {reviewData?.map((rev) =>

      <div>
       <h2>Reseña: {rev.description} </h2>
       <h3>Rate: {rev.rate} </h3>
      </div> 

       )}
    </div>
  );
}

export default Reviews;
