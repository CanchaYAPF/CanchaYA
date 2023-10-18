import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getField, getSports, filter } from '../../Redux/actions/form_actions';
import Filters from '../Filters/Filters'; 
import Cards from '../Cards/Cards';
import style from './Home.module.css';
import Paginate from '../Pagination/Paginate';
import NavBar from '../NavBar/NavBar';
import OrderByPrice from "../Order/orderByPrice"

const Home = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');
  const [paginatedFields, setPaginatedFields] = useState([]);
  const cardsPerPage = 8;

  const dispatch = useDispatch();

  const allSports = useSelector(state => state.sportData);
  const allFields = useSelector(state => state.fieldData);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getSports());
    dispatch(getField());
    if (token === null) navigate('/login');
  }, [dispatch, token, navigate]);

  useEffect(() => {
    const filteredFields = allFields.filter(field =>
      field.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const paginatedData = [];
    for (let i = 0; i < filteredFields.length; i += cardsPerPage) {
      paginatedData.push(filteredFields.slice(i, i + cardsPerPage));
    }
    setPaginatedFields(paginatedData);
  }, [allFields, cardsPerPage, searchTerm]);

  const filters = (event) => {    
    dispatch(filter(event.target.value))   
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <NavBar handleSearchChange={handleSearchChange} />
      <div className={style.homeContainer}>
        <div className={style.leftBox}>
          <Filters />
          <OrderByPrice/>
        </div>
        <div className={style.cards}>
          <Paginate
            data={paginatedFields}
            cardsPerPage={cardsPerPage}
            renderCardFunction={(page, pageIndex) => (
              <Cards allFields={page} />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;