//import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { NavBar } from "../index"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getField } from '../../Redux/actions/form_actions';
import Cards from "../Cards/Cards"

const Home = () => {
  const navigate = useNavigate()
  const token = sessionStorage.getItem(`token`)

  const dispatch = useDispatch() 

  const allFields = useSelector(state => state.fieldData)
  const fields = allFields


  useEffect(() => {
    dispatch(getField())
    if (token === null) navigate("/login")
  }, []);


  console.log(fields)
  return (

    <div>
      <NavBar />
      <Cards allFields ={fields}/>
    </div>
  );
};

export default Home;