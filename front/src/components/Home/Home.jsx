import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getField, getSports, filter,getCities, getHorarios } from '../../Redux/actions/form_actions';
import Filters from '../Filters/Filters'; 
import Cards from '../Cards/Cards';
import styles from './Home.module.css';
import { Paginado } from '../Pagination/Paginate';
import NavBar from '../NavBar/NavBar';
import OrderByPrice from "../Order/orderByPrice"

const Home = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');
  const filteredFields = useSelector((state) => state.filteredFields)

  const dispatch = useDispatch();

  const allSports = useSelector(state => state.sportData);
  const allFields = useSelector(state => state.fieldData);

  const [searchTerm, setSearchTerm] = useState('');

  const [currentPage, setCurrentPage] = useState(parseInt(localStorage.getItem("currentPage")) || 1);
  const fieldsPerPage = 8;
  const lastField = currentPage * fieldsPerPage
  const firstField = lastField - fieldsPerPage
  const currentFields = filteredFields.slice(firstField, lastField)

  useEffect(() => {
    dispatch(getHorarios())
    dispatch(getSports());
    dispatch(getField());
    dispatch (getCities())
    if (token === null) navigate('/login');
  }, [dispatch, token, navigate]);

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

  const filters = (event) => {    
    dispatch(filter(event.target.value))   
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <NavBar handleSearchChange={handleSearchChange} />
      <div className={styles.homeContainer}>
        <div className={styles.leftBox}>
          <Filters />
          <OrderByPrice/>
        </div>
        <div className={styles.cards}>
          <Cards fields={currentFields}/>
        </div>
        <div className={styles.paginadoContainer}>
                <Paginado fieldsPerPage={fieldsPerPage} paginado={paginado} allFields={filteredFields.length} currentPage={currentPage}/>
            </div>
      </div>
    </div>
  );
};

export default Home;