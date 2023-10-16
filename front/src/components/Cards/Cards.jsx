import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import style from './Cards.module.css'



const Cards = ({ fields, page, setPage }) => {
  const [sport, setSport] = useState('');
  const [orderAlf, setOrderAlf] = useState('');
  const [orderRtg, setOrderRtg] = useState('');
  const [origin, setOrigin] = useState('');
  const sports = useSelector((state) => state.sports);
  const copyAllFields = useSelector((state) => state.copyAllFields);
  




  let allFields = fields.map((field) => ({
    ...field,
    sports: field.sports.map((sport) => sport.name).join(', '),
  }));

  

  let message = 'Charging...';
  const buttons = [];

  const handlePage = (event) => {
    setPage(event.target.value * 16);
  };

  const handlePagePrev = () => {
    setPage(page - 16);
  };

  const handlePageNext = () => {
    setPage(page + 16);
  };

  const handleFilterBySport = (event) => {
    setSport(event.target.value);
    setPage(0);
  };

  const handleOrderAlf = (event) => {
    setOrderAlf(event.target.value);
    setOrderRtg('');
  };

  const handleOrderRtg = (event) => {
    setOrderRtg(event.target.value);
    setOrderAlf('');
  };

  if (sport !== '') {
    if(sport === 'all') {
        allFields = [...copyAllFields]
    }
    else{
        allFields = allFields.filter((field) => field.sport.includes(sport));
      if (!allFields.length) message = 'There are no games with that genre.';
    }
  }

  if (origin === 'api') {
    allFields = allFields.filter((field) => !isNaN(field.id));
  }

  if (origin === 'db') {
    allFields = allFields.filter((field) => isNaN(field.id));
    if (!allFields.length) message = 'There are no games in the database with that specification.';
  }

  if (origin === 'all') {
    allFields = []
    allFields.push(...copyAllFields)
    setOrigin('');
    if (!sport.length) setDeporte('');
    
  }

  for (let i = 1; i <= Math.ceil(allFields.length / 16); i++) {
    buttons.push(i);
  }

  if (orderAlf === 'A-Z') {
    allFields.sort((x, y) => {
      if (x.name < y.name) return -1;
      if (x.name > y.name) return 1;
      return 0;
    });
  }
  if (orderAlf === 'Z-A') {
    allFields.sort((x, y) => {
      if (x.name < y.name) return 1;
      if (x.name > y.name) return -1;
      return 0;
    });
  }
  if (orderRtg === 'Ascending') {
    allFields.sort((x, y) => x.rating - y.rating);
  }
  if (orderRtg === 'Descending') {
    allFields.sort((x, y) => y.rating - x.rating);
  }

  

  return (
    <div>
     
      <div className={style.container}>
        <div className={style.filtersport}>
          {sport.map((sport) => (
            <button value={sport.name} onClick={handleFilterBySport} key={sport.id}>
              {sport.name}
            </button>
          ))}
        </div>
        <div className={style.filter}>
          <button 
          onClick={handleOrderAlf} 
          value='A-Z'
          className={orderAlf === 'A-Z' ? style.activeButton : ''}>
            &uArr;&dArr; A-Z
          </button>
          <button 
          onClick={handleOrderAlf} 
          value='Z-A'
          className={orderAlf === 'Z-A' ? style.activeButton : ''}
          >
            &uArr;&dArr; Z-A
          </button>
          <button 
          onClick={handleOrderRtg} 
          value='Descending'
          className={orderRtg === 'Descending' ? style.activeButton : ''}
          >
            &uArr; Rating
          </button>
          <button 
          onClick={handleOrderRtg} 
          value='Ascending'
          className={orderRtg === 'Ascending' ? style.activeButton : ''}
          >
            &dArr; Rating
          </button>
          
        </div>
      </div> 
     
      
    
      <div className={style.pagination}>
          {page > 0 && <button onClick={handlePagePrev}>&lArr;</button>}
          {buttons.map((button, i) => (
            <button 
            value={i} 
            onClick={handlePage} 
            key={i}
            className={page / 16 === i ? style.activeButton : ''}
            >
              {button}
            </button>
          ))}
          {page < allFields.length - 16 && <button onClick={handlePageNext}>&rArr;</button>}
        </div>

      <div className={style.cards}>
        {allFields.length ? (
          allFields.slice(page, page + 16).map((field, i) => <Card field={field} key={i} />)
        ) : (
          <p>{message}</p>
        )}
      </div>
      <div className={style.pagination}>
          {page > 0 && <button onClick={handlePagePrev}>&lArr;</button>}
          {buttons.map((button, i) => (
            <button 
            value={i} 
            onClick={handlePage} 
            key={i}
            className={page / 16 === i ? style.activeButton : ''}>
              {button}
            </button>
          ))}
          {page < allFields.length - 16 && <button onClick={handlePageNext}>&rArr;</button>}
        </div>
     
    </div>
  );
};

export default Cards;