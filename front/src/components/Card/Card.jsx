import {Link} from "react-router-dom"




function Card({field}) {
  const id = field.id

  

    return (
      <div className="cardContainer">
        <Link to ={`/${id}`} >
        <div className="info">
          
          <h2>Name: {field.name}</h2>
        
          </div>
          


        </Link>
        </div>
      
    );
  }
  
  export default Card