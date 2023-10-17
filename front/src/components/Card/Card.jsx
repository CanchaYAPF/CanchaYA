import {Link} from "react-router-dom"




function Card({field}) {
  const id = field.id

  

    return (
      <div className="cardContainer">
        <Link to ={`/${id}`} >
        <div className="info">
          
          <h2>Name: {field.name}</h2>
          <h3>City: {field.city}</h3>
          <h4>Address: {field.address}</h4>
          <h5>Price: {field.capacity}</h5>
        
          </div>
          


        </Link>
        </div>
      
    );
  }
  
  export default Card