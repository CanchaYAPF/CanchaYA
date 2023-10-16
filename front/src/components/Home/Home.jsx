//import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { NavBar } from "../index"
import { useNavigate } from 'react-router-dom';
import Cards from "../Cards/Cards"
import { useSelector, useDispatch } from "react-redux";
import { getField } from '../../Redux/actions/form_actions';

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = sessionStorage.getItem(`token`)
  
  const allFields = useSelector(state => state.fieldData)

  const fields = allFields
  

  useEffect(() => {
    
    dispatch(getField());
    if (token === null) navigate("/login")
  }, []);

  
  return (

    <div>
      <NavBar />
      <Cards allFields ={fields} />
    </div>


  );
};

export default Home;