import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filter, filterCities, filterHorario, resetSportFilter, resetCityFilter, resetHorarioFilter, filterPriceRange, resetPriceRangeFilter } from '../../Redux/actions/form_actions';
import style from './Filters.module.css';

function Filters() {
  const dispatch = useDispatch();
  const allSports = useSelector((state) => state.form.sportData);
  const allCities = useSelector((state) => state.form.citiesData); 
  const allHorarios = useSelector((state) => state.form.horariosData);
  const allFieldsBackUp = useSelector((state) => state.form.allFieldsBackUp);

  const [filters, setFilters] = useState({
    sport: "",
    city: "",
    horario: "",
    priceRange: { min: '', max: '' },
  });

  useEffect(() => {
    if (filters.sport !== "") {
      dispatch(filter(filters.sport));
    }
    if (filters.city !== "") {
      dispatch(filterCities(filters.city));
    }
    if (filters.horario !== "") {
      dispatch(filterHorario(filters.horario));
    }
    if (filters.priceRange.min !== "" || filters.priceRange.max !== "") {
      dispatch(filterPriceRange(filters.priceRange));
    }
  }, [filters]);

  const handleFilterChange = (event) => {
    const selectedSport = event.target.value;
    setFilters(filters => ({ ...filters, sport: selectedSport }));
    if (selectedSport === "") {
      dispatch(resetSportFilter());
    }
  };

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setFilters(filters => ({ ...filters, city: selectedCity }));
    if (selectedCity === "") {
      dispatch(resetCityFilter());
    }
  };

  const handleHorario = (event) => {
    const selectedHorario = event.target.value;
    setFilters(filters => ({ ...filters, horario: selectedHorario }));
    if (selectedHorario === "") {
      dispatch(resetHorarioFilter());
    }
  };

  const handlePriceRangeChange = (event) => {
    const { name, value } = event.target;
    setFilters(filters => ({
      ...filters,
      priceRange: {
        ...filters.priceRange,
        [name]: value,
      },
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      sport: "",
      city: "",
      horario: "",
      priceRange: { min: '', max: '' },
    });
    dispatch(resetSportFilter());
    dispatch(resetCityFilter());
    dispatch(resetHorarioFilter());
    dispatch(resetPriceRangeFilter());
  };

  return (
    <div className={style.selects}>
      <select className={style.select} onChange={handleFilterChange} name="filter">
        <option value="">Deportes</option>
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
        {allHorarios.map((hora, index) => (
          <option value={hora} key={hora + index}>
            {hora}
          </option>
        ))}
      </select>
      <div className={style.priceFilter}>
        <input
          type="number"
          placeholder="Precio mínimo"
          name="min"
          value={filters.priceRange.min}
          onChange={handlePriceRangeChange}
          className={style.priceInput}
        />
        <input
          type="number"
          placeholder="Precio máximo"
          name="max"
          value={filters.priceRange.max}
          onChange={handlePriceRangeChange}
          className={style.priceInput}
        />
      </div>
      <button onClick={handleResetFilters}>Restablecer filtros</button>
    </div>
  );
}

export default Filters;