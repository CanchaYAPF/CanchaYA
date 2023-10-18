//import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {useState} from 'react';
import { NavBar } from "../index"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getField, getSports, filter } from '../../Redux/actions/form_actions';
import Cards from "../Cards/Cards"
import style from './Home.module.css'
import Paginate from '../Pagination/Paginate';
import OrderByPrice from '../Order/orderByPrice'; 

const Home = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');
  const [paginatedFields, setPaginatedFields] = useState([]);
  const cardsPerPage = 8;

  const dispatch = useDispatch();

  const allSports = useSelector(state => state.sportData);
  const allFields = useSelector(state => state.fieldData);
  const fields = allFields

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getSports());
    dispatch(getField());
    if (token === null) navigate('/login');
  }, []);

  useEffect(() => {
    const paginatedData = [];
    for (let i = 0; i < allFields.length; i += cardsPerPage) {
      paginatedData.push(allFields.slice(i, i + cardsPerPage));
    }
    setPaginatedFields(paginatedData);
  }, [allFields, cardsPerPage]);

  const filters= (event) =>{    
    dispatch(filter(event.target.value))   
  }

  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }
  const filteredFields = allFields.filter(field =>
    field.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <div className={style.selects}>
        
      <OrderByPrice />
      <select className={style.select} onChange={filters} name="filter">
    {allSports.map(s=>  <option value={s} key={s}> {s} </option>   )}
      </select>

     
      <select className={style.select} onChange={filters} name="filter">
      <option value="Fecha">Fecha</option>
      {allSports.map(s=>  <option value={s.name} key={s.id}> {s.name} </option>   )}
  </select>
  <select className={style.select} onChange={filters} name="filter">
      <option value="Hora">Hora</option>
      {allSports.map(s=>  <option value={s.a} key={s.x}> {s.e} </option>   )}
  </select>
  <div className={style.search}>
        <input type="text"
        placeholder="Buscar cancha por nombre" 
        />
        </div>
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
  );
};

export default Home;
