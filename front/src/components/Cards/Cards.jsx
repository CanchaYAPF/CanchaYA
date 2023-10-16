import Card from "../Card/Card"

 
function Cards({allFields}) {


const Fields = allFields



  return (
     
    <div className="cardsContainer">
    <p>ass</p>
    {Fields?.map((field,id) => {
    return <Card key={id} field={field}/> 
    })}
    </div>
    

  )}

  export default Cards