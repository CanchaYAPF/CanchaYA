import Card from "../Card/Card"



 
function Cards({allFields}) {

const Fields = allFields
  

  



  return (
     
    <div className="cardsContainer">
    
    {Fields?.map((field) => {
    return <Card key={field.id} field={field}/> 
    })}
    </div>
    

  )}

  export default Cards