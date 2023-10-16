import Cards from '../Cards/Cards';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import style from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = ({page, setPage}) => {
  const allFields = useSelector((state) => state.allFields);
  const fieldsByName = useSelector((state) => state.fieldsByname);

  const [fields, setFields] = useState([]);


  useEffect(() => {
    if (fieldsByName.length) {
      setFields(fieldsByName);
    } else if (allFields.length) {
      setFields(allFields);
    }
  }, [allFields, fieldsByName]);

  return (
    <div className={style.homeContainer}>
      {/* <div className={style.navbar}>
        <h1>Navbar</h1>
      </div>
      <Link to={'/form'}><button className={style.btn}>Agregar Cancha</button></Link>
      <Link to={'/login'}><button className={style.btn}>Iniciar Sesión</button></Link>
      <Link to={'/signup'}><button className={style.btn}>Registrarse</button></Link>
      <div className={style.search}>
        <input type="text" placeholder="Buscar..." />
      </div> */}
      <div className={style.cards}>
        <h1>Canchas</h1>
        <Cards fields={fields} page={page} setPage={setPage}/>
      </div>
    </div>
    
  );
};

export default Home;