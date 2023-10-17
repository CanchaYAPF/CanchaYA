//import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { NavBar } from "../index"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getField, getSports } from '../../Redux/actions/form_actions';
import Cards from "../Cards/Cards"
import style from './Home.module.css'


const Home = () => {
  const navigate = useNavigate()
  const token = sessionStorage.getItem(`token`)

  const dispatch = useDispatch() 

  const allSports = useSelector(state => state.sportData)
  const allFields = useSelector(state => state.fieldData)
  const fields = allFields


  useEffect(() => {
    dispatch(getSports())
    dispatch(getField())
    if (token === null) navigate("/login")
  }, []);



  const filters= (event) =>{
    
    dispatch(filterByTeam(event.target.value))
   
  }




  console.log(fields)
  return (

    <div >
      <NavBar />
      <div className={style.selects}>
      <select className={style.select} onChange={filters} name="filter">
      <option value="Ciudad">Ciudad</option>
          {allSports.map(s=>  <option value={s.name} key={s.id}> {s.name} </option>   )}
      </select>
      <select className={style.select} onChange={filters} name="filter">
      <option value="Deporte">Deporte</option>
          {allSports.map(s=>  <option value={s} key={s}> {s} </option>   )}
      </select>
      <select className={style.select} onChange={filters} name="filter">
      <option value="Fecha">Fecha</option>
      {allSports.map(s=>  <option value={s.name} key={s.id}> {s.name} </option>   )}
  </select>
  <select className={style.select} onChange={filters} name="filter">
      
  </select>
  <div className={style.search}>
        <input type="text"
        placeholder="Buscar cancha por nombre" 
        />
        </div>
  </div>
    <div className={style.cards}>
    
    </div>
      

      <Cards allFields ={fields}/>
      
    </div>
  );
};

export default Home;