import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filter } from '../../Redux/actions/form_actions';
import style from './Filters.module.css';

function Filters() {
  const dispatch = useDispatch();
  const allSports = useSelector((state) => state.sportData);

  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  const handleFilterChange = (event) => {
    dispatch(filter(event.target.value));
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
