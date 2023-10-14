import style from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <div className={style.navbar}>
        <h1>Navbar</h1>
      </div>
      <button className={style.btn}>Agregar Cancha</button>
      <Link to={'/login'}><button className={style.btn}>Iniciar Sesión</button></Link>
      <Link to={'/signup'}><button className={style.btn}>Registrarse</button></Link>
      <div className={style.search}>
        <input type="text" placeholder="Buscar..." />
      </div>
    </div>
  );
};

export default Home;