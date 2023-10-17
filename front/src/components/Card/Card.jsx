import {Link} from "react-router-dom"
import style from "./card.module.css";




function Card({field}) {
  const id = field.id

  

    return (
      <div className="cardContainer">
        <Link to ={`/${id}`} >
        <div className={style.container2}>
          
          <h1>Name: {field.name}</h1>
          <h2>City: {field.city}</h2>
          <h3>Price: {field.price}</h3>
          <h4>Sport: {field.sport}</h4>  
          <div className={style.imagen}>
            <img src={field.image}  alt="Charging..." />
          </div>
        
          </div>
          


        </Link>
        </div>
      
    );
  }
  
  export default Card