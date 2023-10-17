//import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { NavBar } from "../index"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getField, getSports } from '../../Redux/actions/form_actions';
import Cards from "../Cards/Cards"


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
      <select  onChange={filters} name="filter">
          {allSports.map(s=>  <option value={s.name} key={s.id}> {s.name} </option>   )}
        
      </select>
    <div >
    
    </div>
      

      <Cards allFields ={fields}/>
      
    </div>
  );
};

export default Home;