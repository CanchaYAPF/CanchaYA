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
// Home.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getField, getSports, filter, getCities, getHorarios } from '../../Redux/actions/form_actions';
import Filters from '../Filters/Filters';
import Cards from '../Cards/Cards';
import style from './Home.module.css';
import {Paginate} from '../Pagination/Paginate';
/* import NavBar from '../NavBar/NavBar'; */
import OrderByPrice from '../Order/orderByPrice';

const Home = () => {
  const filteredFields = useSelector((state) => state.filteredFields);
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');
  // const [paginatedFields, setPaginatedFields] = useState([]);
  // const cardsPerPage = 8; // Define 8 tarjetas por página
  const [currentPage, setCurrentPage] = useState(parseInt(localStorage.getItem("currentPage")) || 1);
  const fieldsPerPage = 9;
  const lastField = currentPage * fieldsPerPage
  const firstField = lastField - fieldsPerPage
  const currentFields = filteredFields.slice(firstField, lastField)

  const dispatch = useDispatch();

  const allSports = useSelector((state) => state.sportData);
  const allFields = useSelector((state) => state.fieldData);



  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getHorarios());
    dispatch(getSports());
    dispatch(getField());
    dispatch(getCities());
    if (token === null) navigate('/login');
  }, [dispatch, token, navigate]);

  useEffect(() => {
    const filteredFields = allFields.filter((field) =>
      field.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // const paginatedData = [];
    // for (let i = 0; i < filteredFields.length; i += cardsPerPage) {
    //   paginatedData.push(filteredFields.slice(i, i + cardsPerPage));
    // }
    // setPaginatedFields(paginatedData);
  }, [allFields, searchTerm]);

  const filters = (event) => {
    dispatch(filter(event.target.value));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const storedCurrentPage = localStorage.getItem("currentPage");
    if (storedCurrentPage) {
      setCurrentPage(parseInt(storedCurrentPage));
      localStorage.removeItem("currentPage");
    }
  }, []);
    
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage.toString());
  }, [currentPage]);
    
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
    {/*   <NavBar handleSearchChange={handleSearchChange} /> */}
      <div className={style.homeContainer}>
        <div className={style.leftBox}>
          <Filters />
          <OrderByPrice />
        </div>
        <div className={style.cards}>
          <Cards fields={currentFields}/>
          {/* Pasa la cantidad correcta de tarjetas por página a Paginate
          <Paginate
            data={paginatedFields}
            cardsPerPage={cardsPerPage}
            renderCardFunction={(page, pageIndex) => (
              <Cards allFields={page} />
            )} 
          />*/}
          <Paginate fieldsPerPage={fieldsPerPage} paginado={paginado} allFields={filteredFields.length} currentPage={currentPage}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
