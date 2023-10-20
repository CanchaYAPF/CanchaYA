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


// import React, { useState } from 'react';
// import style from "./Paginate.module.css"

// const Paginate = ({ data, cardsPerPage, renderCardFunction }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalCards = data.length;
//   const totalPages = Math.ceil(totalCards / cardsPerPage);

//   const startIndex = (currentPage - 1) * cardsPerPage;
//   const endIndex = Math.min(startIndex + cardsPerPage, totalCards);

//   const cardsToDisplay = data.slice(startIndex, endIndex);

//   const nextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const setPage = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

//   return (
//     <div>
//       <div className={style.container}>
//         {cardsToDisplay.map((card, index) => (
//           <div className={style.card} key={index}>
//             {renderCardFunction(card, index)}
//           </div>
//         ))}
//       </div>
//       <div className={style.button}>
//         <button onClick={prevPage} disabled={currentPage === 1}>
//           Anterior
//         </button>
//         {pageNumbers.map((page) => (
//           <button
//             key={page}
//             onClick={() => setPage(page)}
//             className={currentPage === page ? 'active' : ''}
//           >
//             {page}
//           </button>
//         ))}
//         <button onClick={nextPage} disabled={currentPage === totalPages}>
//           Siguiente
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Paginate;

import React, { useState, useEffect } from "react";
import styles from "./Paginate.module.css"

export const Paginate = ({ fieldsPerPage, allFields, paginado, currentPage }) => {
  const [displayPages, setDisplayPages] = useState([]);

  useEffect(() => {
    const totalPages = Math.ceil(allFields / fieldsPerPage);
    const maxDisplayPages = 12; //Cantidad de páginas visibles
    let startPage = Math.max(currentPage - Math.floor(maxDisplayPages / 2), 1);
    let endPage = Math.min(startPage + maxDisplayPages - 1, totalPages);

    if (endPage - startPage < maxDisplayPages - 1) {
      startPage = Math.max(endPage - maxDisplayPages + 1, 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    setDisplayPages(pages);
  }, [currentPage, allFields, fieldsPerPage]);

  const [inputPage, setInputPage] = useState("");
  const [errorInput, setErrorInput] = useState("");

  const handleInputChange = (event) => { 
    setInputPage(event.target.value); 
    setErrorInput(""); 
  };

  const handleGoToPage = () => {
    const pageNumber = parseInt(inputPage, 10);
    if (pageNumber >= 1 && pageNumber <= Math.ceil(allFields / fieldsPerPage)) {
      paginado(pageNumber);
      setInputPage("");
    } else {
      setErrorInput("Only numbers within the range");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleGoToPage();
    }
  };

  return (
    <nav>
      <ul className={styles.paginado} style={{ display: "flex", alignItems: "center" }}>
        <li className={currentPage === 1 ? styles.disabled : ""}>
          <button onClick={() => paginado(currentPage - 1)} disabled={currentPage === 1}>
            {"<"}
          </button>
        </li>
        {displayPages.map((number) => (
          <li
            className={currentPage === number ? `${styles.number} ${styles.active}` : styles.number}
            key={number}
          >
            <button onClick={() => paginado(number)}>{number}</button>
          </li>
        ))}
        <li className={currentPage === Math.ceil(allFields / fieldsPerPage) ? styles.disabled : ""}>
          <button onClick={() => paginado(currentPage + 1)} disabled={currentPage === Math.ceil(allFields / fieldsPerPage)}>
            {">"}
          </button>
        </li>
        <li>
          <p className={styles.inicioFin}>
            {currentPage} / {Math.ceil(allFields / fieldsPerPage)}
          </p>
        </li>
        <li>
          <input
            type="text"
            value={inputPage}
            onChange={handleInputChange}
            placeholder=""
            style={{ width: "20px" }}
            onKeyDown={handleKeyDown}
          />
          <button style={{ cursor: "pointer" }} onClick={handleGoToPage}>
            Go
          </button>
        </li>
        <p style={{ color: "red", marginTop: "5px", height: "8px", marginLeft: "10px" }} disabled={!errorInput}>
          {errorInput && errorInput}
        </p>
      </ul>
    </nav>
  );
}