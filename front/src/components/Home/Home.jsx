import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getField, getSports, filter, getCities, getHorarios } from '../../Redux/actions/form_actions';
import { getAllBookings } from '../../Redux/actions/form_actions';
import Filters from '../Filters/Filters';
import Cards from '../Cards/Cards';
import style from './Home.module.css';
import {Paginado} from '../Pagination/Paginate';
import OrderByPrice from '../Order/orderByPrice';
import SearchContext from '../../SearchContext';
import axios from 'axios';


const Home = () => {
  const { searchTerm } = useContext(SearchContext);
  const navigate = useNavigate();
  const tokenJwt = sessionStorage.getItem('token');
  const googleToken = sessionStorage.getItem('googleToken')
  const dispatch = useDispatch();
  const allFields = useSelector((state) => state.fieldData); 
  
  const bookMp = useSelector((state) => state.bookMp);
  const bookingData = useSelector((state) => state.bookingData)

  const allFilteredFields = useSelector((state) => state.filteredFields);
  const [currentPage, setCurrentPage] = useState(parseInt(localStorage.getItem("currentPage")) || 1);
  const fieldsPerPage = 8;
  const lastField = currentPage * fieldsPerPage
  const firstField = lastField - fieldsPerPage
  const [currentFields, setCurrentFields] = useState([]);
  
  useEffect(() => { //maneja si la matriz esta vacia 
    if (!allFilteredFields.length) {
      dispatch(getField());
    }
  }, [dispatch, allFilteredFields]);

  useEffect(() => { 
    if (!bookingData.length) {
      dispatch(getAllBookings());
    }
  }, [bookingData]);

  // useEffect(() => {
  //   if (bookMp.length === 0) {
  //     dispatch(getAllBookings());
  //   }
  // }, [dispatch, bookMp]);
  
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
  let token = tokenJwt ? tokenJwt : googleToken
  
  useEffect(() => {
    // dispatch(getAllBookings());
    // const aux = bookingData[bookingData?.length-1]
    // console.log(aux);
    dispatch(getHorarios());
    dispatch(getSports());
    dispatch(getField());
    dispatch(getCities());
    if (token === null ) navigate('/login');
  }, [dispatch, token, navigate]);
  
  useEffect(() => {
    const filteredFields = allFilteredFields
    .filter(field => field.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(firstField, lastField);
    setCurrentFields(filteredFields);
  }, [searchTerm, allFilteredFields, firstField, lastField]);
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('status');  
    const params = urlParams.get('external_reference');  
    if ( myParam === "approved") {
      axios.put(`http://localhost:3001/booking/${params}`).then((response) => console.log(response))
      return alert("Reserva pagada con éxito!")
    }
  }, [])

  return (
    <div>
      <div className={style.homeContainer}>
        <div className={style.leftBox}>
          <Filters />
          <OrderByPrice />
        </div>
        <div className={style.cards}>
          <Cards allFields ={currentFields} />
        </div>
        <div className={style.paginadoContainer}>
          <Paginado fieldsPerPage={fieldsPerPage} paginado={paginado} allFields={allFilteredFields.length} currentPage={currentPage}/>
        </div>
      </div>
    </div>
  );
};

export default Home;

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