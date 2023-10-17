import { useState, useEffect } from 'react';
import { NavBar } from "../index"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getField, getSports, filter } from '../../Redux/actions/form_actions';
import Cards from "../Cards/Cards"
import style from './Home.module.css'

const Home = () => {
  const navigate = useNavigate()
  const token = sessionStorage.getItem(`token`)

  const dispatch = useDispatch() 

  const allSports = useSelector(state => state.sportData)
  const allFields = useSelector(state => state.fieldData)

  
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getSports())
    dispatch(getField())
    if (token === null) navigate("/login")
  }, []);

  const filters= (event) => {
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
        <select className={style.select} onChange={filters} name="filter">
          {allSports.map(s => <option value={s} key={s}> {s} </option>)}
        </select>
        <select className={style.select} onChange={filters} name="filter">
          <option value="Fecha">Fecha</option>
          {allSports.map(s => <option value={s.name} key={s.id}> {s.name} </option>)}
        </select>
        <select className={style.select} onChange={filters} name="filter">
          <option value="Hora">Hora</option>
          {allSports.map(s => <option value={s.a} key={s.x}> {s.e} </option>)}
        </select>
        <div className={style.search}>
          <input
            type="text"
            placeholder="Buscar cancha por nombre"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className={style.cards}></div>
      <Cards allFields={filteredFields} />
    </div>
  );
};

export default Home;