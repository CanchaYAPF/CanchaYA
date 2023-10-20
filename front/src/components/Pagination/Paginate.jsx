// import React, { useState } from 'react';

// const Paginate = ({ data, cardsPerPage, renderCardFunction }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const startIndex = (currentPage - 1) * cardsPerPage;
//   const endIndex = startIndex + cardsPerPage;
//   const cardsToDisplay = data.slice(startIndex, endIndex);

//   const nextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const prevPage = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   return (
//     <div>
//       {cardsToDisplay.map((card, index) => renderCardFunction(card, index))}
//       <button onClick={prevPage} disabled={currentPage === 1}>
//         Anterior
//       </button>
//       <button onClick={nextPage} disabled={endIndex >= data.length}>
//         Siguiente
//       </button>
//     </div>
//   );
// };

// export default Paginate;
import React, { useState } from 'react';
import style from "./Paginate.module.css"

const Paginate = ({ data, cardsPerPage, renderCardFunction }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalCards = data.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, totalCards);

  const cardsToDisplay = data.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const setPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div>
      <div className={style.container}>
        {cardsToDisplay.map((card, index) => (
          <div className={style.card} key={index}>
            {renderCardFunction(card, index)}
          </div>
        ))}
      </div>
      <div className={style.button}>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => setPage(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Paginate;
