import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../Redux/actions/form_actions';


function Reviews(idField) {
  const dispatch = useDispatch();
  const reviewData = useSelector((state) => state.reviewData);

  
 
const idF = idField.idField
const calculateAverageRate = () => {
  if (reviewData.length === 0) return 0; 
  const totalRate = reviewData.reduce((acc, rev) => acc + rev.rate, 0);
  return totalRate / reviewData.length;
};

const averageRate = calculateAverageRate();




  const renderAverageStars = (averageRate) => {
    const stars = [];
    for (let i = 0; i < averageRate; i++) {
      stars.push(<span key={i}>⭐️</span>);
    }
    return stars;
  };

  const renderStars = (rate) => {
    const stars = [];
    for (let i = 0; i < rate; i++) {
      stars.push(<span key={i}>⭐️</span>);
    }
    return stars;
  };


  console.log(idF)
  useEffect(() => {
    dispatch(getReviews(idF));
  }, [dispatch]);
  
  return (
    <div>
      <h1>Reseñas de la cancha:</h1>
      {reviewData.length === 0 ? (
        <p>Por el momento no hay reviews, te invitamos a reservar un turno y calificarnos.</p>
      ) : (
        <div>
          <h3>
            Promedio de calificación: {averageRate.toFixed(2)} {renderAverageStars(averageRate)}
          </h3>
          {reviewData?.map((rev) => 
            <div key={rev.id}>
              <h2>{rev.User.name}: "{rev.description}"</h2>
              <h3>Calificación: {rev.rate} {renderStars(rev.rate)}</h3>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Reviews;
