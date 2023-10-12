import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/home" className={style.navLink}>Inicio</Link>
        <Link to="/reserva-turno" className={style.navLink}>Reserva turno</Link>
        <Link to="/deportes" className={style.navLink}>Deportes</Link>
        <Link to="/mi-cuenta" className={style.navLink}>Mi cuenta</Link>
        <Link to="/contacto" className={style.navLink}>Contacto</Link>
        <Link to="/acerca-de-nosotros" className={style.navLink}>Acerca de nosotros</Link>
        <Link to="/preguntas-frecuentes" className={style.navLink}>Preguntas frecuentes</Link>
        <div className="search">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;