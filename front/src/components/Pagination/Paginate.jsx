
import style from './Paginate.module.css'

function Paginate({page, total}) {
  //recibe los handlers de paginado
    const pageNumbers = [];
  //define la cantidad de numeros a mostrar
    for (let i = 1; i <= total; i++) {
      pageNumbers.push(i);
    }
  //mapea y renderiza el total de numeros en botones
    return (
      <div className={style.container}>
        {pageNumbers.map((pageNumber) => (
          <button key={pageNumber} className="num" onClick={() => page(pageNumber)}>{pageNumber}</button>
        ))}
      </div>
    );
  }
  
  export default Paginate;
  