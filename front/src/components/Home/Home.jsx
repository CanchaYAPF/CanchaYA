// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { getField, getSports, filter,getCities, getHorarios } from '../../Redux/actions/form_actions';
// import Filters from '../Filters/Filters'; 
// import Cards from '../Cards/Cards';
// import style from './Home.module.css';
// import Paginate from '../Pagination/Paginate';
// import NavBar from '../NavBar/NavBar';
// import OrderByPrice from "../Order/orderByPrice"

// const Home = () => {
//   const navigate = useNavigate();
//   const token = sessionStorage.getItem('token');
//   const [paginatedFields, setPaginatedFields] = useState([]);
//   const cardsPerPage = 8;

//   const dispatch = useDispatch();

//   const allSports = useSelector(state => state.sportData);
//   const allFields = useSelector(state => state.fieldData);

//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     dispatch(getHorarios())
//     dispatch(getSports());
//     dispatch(getField());
//     dispatch (getCities())
//     if (token === null) navigate('/login');
//   }, [dispatch, token, navigate]);

//   useEffect(() => {
//     const filteredFields = allFields.filter(field =>
//       field.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const paginatedData = [];
//     for (let i = 0; i < filteredFields.length; i += cardsPerPage) {
//       paginatedData.push(filteredFields.slice(i, i + cardsPerPage));
//     }
//     setPaginatedFields(paginatedData);
//   }, [allFields, cardsPerPage, searchTerm]);

//   const filters = (event) => {    
//     dispatch(filter(event.target.value))   
//   }

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   }

//   return (
//     <div>
//       <NavBar handleSearchChange={handleSearchChange} />
//       <div className={style.homeContainer}>
//         <div className={style.leftBox}>
//           <Filters />
//           <OrderByPrice/>
//         </div>
//         <div className={style.cards}>
//           <Paginate
//             data={paginatedFields}
//             cardsPerPage={cardsPerPage}
//             renderCardFunction={(page, pageIndex) => (
//               <Cards allFields={page} />
//             )}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getField, getSports, filter, getCities, getHorarios } from '../../Redux/actions/form_actions';
import Filters from '../Filters/Filters';
import Cards from '../Cards/Cards';
import style from './Home.module.css';
import Paginate from '../Pagination/Paginate';
import OrderByPrice from '../Order/orderByPrice';

const Home = ({ searchTerm }) => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');
  const googleToken= sessionStorage.getItem('googleToken')
  const dispatch = useDispatch();
  const allFields = useSelector((state) => state.fieldData);
  const [currentPage, setCurrentPage] = useState(1);
  const cardxPage = 8;
  const [filteredFields, setFilteredFields] = useState([]);

  const normalize = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };

  useEffect(() => {
    dispatch(getHorarios());
    dispatch(getSports());
    dispatch(getField());
    dispatch(getCities());
    if (token === null && googleToken===null) navigate('/login');
  }, [dispatch, token,googleToken, navigate]);

  useEffect(() => {
    const newFilteredFields = allFields.filter((field) =>
      normalize(field.name).includes(normalize(searchTerm))
    );
    setFilteredFields(newFilteredFields);
  }, [allFields, searchTerm]);

  const totalPages = Math.ceil(filteredFields.length / cardxPage);
  const startIndex = (currentPage - 1) * cardxPage;
  const endIndex = startIndex + cardxPage;
  const currentCards = filteredFields.slice(startIndex, endIndex);

  const pageHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pagination = (event) => {
    if (event.target.name === "next" && currentPage  * cardxPage < filteredFields.length ){
      setCurrentPage(currentPage +1);
    } else if(event.target.name=== "prev" && startIndex!==0 ) {
      setCurrentPage(currentPage -1);
    }
  };

  const filters = (event) => {
    dispatch(filter(event.target.value));
  };

  return (
    <div>
      <div className={style.homeContainer}>
        <div className={style.leftBox}>
          <Filters />
          <OrderByPrice />
        </div>
        <div className={style.cards}>
          <Cards allFields ={currentCards} />
        </div>
        <Paginate total={totalPages} page={pageHandler}/>
        <div className={style.button}>
          <button name="prev" onClick={pagination}>Prev Page</button>
          <button name="next" onClick={pagination}>Next Page</button>
        </div>
      </div>
    </div>
  );
};

export default Home;