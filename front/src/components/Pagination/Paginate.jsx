
// import './paginationn.css'

function Pagination({page, total}) {
  //recibe los handlers de paginado
    const pageNumbers = [];
  //define la cantidad de numeros a mostrar
    for (let i = 1; i <= total; i++) {
      pageNumbers.push(i);
    }
  //mapea y renderiza el total de numeros en botones
    return (
      <div>
        {pageNumbers.map((pageNumber) => (
          <button key={pageNumber} className="num" onClick={() => page(pageNumber)}>{pageNumber}</button>
        ))}
      </div>
    );
  }
  
  export default Pagination;
  