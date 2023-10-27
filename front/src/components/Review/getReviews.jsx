import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../Redux/actions/form_actions';


function Reviews() {
  const dispatch = useDispatch();
  const reviewData = useSelector((state) => state.reviewData);
 

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  return (


    <div>
      {reviewData?.map((rev) =>
      <div>
       <h1>{rev.description} </h1>
       <h3>{rev.rate} </h3>
       </div> 
       )}
    </div>
  );
}

export default Reviews;
