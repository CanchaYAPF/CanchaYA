import React, { useState } from 'react';

const Paginate = ({ data, cardsPerPage, renderCardFunction }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const cardsToDisplay = data.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      {cardsToDisplay.map((card, index) => renderCardFunction(card, index))}
      <button onClick={prevPage} disabled={currentPage === 1}>
        Anterior
      </button>
      <button onClick={nextPage} disabled={endIndex >= data.length}>
        Siguiente
      </button>
    </div>
  );
};

export default Paginate;
