import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filter, filterCities,filterHorario } from '../../Redux/actions/form_actions'; // Asegúrate de tener una acción 'filterCities' en tus acciones
import style from './Filters.module.css';

function Filters() {
  const dispatch = useDispatch();
  const allSports = useSelector((state) => state.sportData);
  const allCities = useSelector((state) => state.citiesData); 
  const allHorarios = useSelector((state) => state.horariosData);

  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedCity, setSelectedCity] = useState(''); 
  const handleFilterChange = (event) => {
    dispatch(filter(event.target.value));
  };

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setSelectedCity(selectedCity);
    dispatch(filterCities(selectedCity));
    
  };

  const handleHorario = (event) => {
    dispatch(filterHorario(event.target.value));
  };

  const handlePriceRangeChange = (event) => {
    const { name, value } = event.target;
    setPriceRange({
      ...priceRange,
      [name]: value,
    });
  };

  return (
    <div className={style.selects}>
      <select className={style.select} onChange={handleFilterChange} name="filter">
        <option value="Deportes">Deportes</option>
        {allSports.map((s) => (
          <option value={s.name} key={s.id}>
            {s.name}
          </option>
        ))}
      </select>
      
      <select className={style.select} onChange={handleCityChange} name="city">
        <option value="">Todas las ciudades</option>
        {allCities.map((city) => (
          <option value={city} key={city}>
            {city}
          </option>
        ))}
      </select>

      <select className={style.select} onChange={handleHorario} name="city">
        <option value="">Horarios</option>
        {allHorarios.map((hora) => (
          <option value={hora} key={hora}>
            {hora}
          </option>
        ))}
      </select>

      <div className={style.priceFilter}>
        <input
          type="number"
          placeholder="Precio mínimo"
          name="min"
          value={priceRange.min}
          onChange={handlePriceRangeChange}
          className={style.priceInput}
        />
        <input
          type="number"
          placeholder="Precio máximo"
          name="max"
          value={priceRange.max}
          onChange={handlePriceRangeChange}
          className={style.priceInput}
        />
      </div>
    </div>
  );
}

export default Filters;
