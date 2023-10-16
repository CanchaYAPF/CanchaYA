//import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { NavBar } from "../index"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const token = sessionStorage.getItem(`token`)

  useEffect(() => {
    if (token === null) navigate("/login")
  }, []);
  return (

    <div>
      <NavBar />
    </div>
  );
};

export default Home;