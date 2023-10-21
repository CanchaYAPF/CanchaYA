
// export default Home;
// Home.js
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getField, getSports, filter, getCities, getHorarios } from '../../Redux/actions/form_actions';
import Filters from '../Filters/Filters';
import Cards from '../Cards/Cards';
import style from './Home.module.css';
import Paginate from '../Pagination/Paginate';
/* import NavBar from '../NavBar/NavBar'; */
import OrderByPrice from '../Order/orderByPrice';

const Home = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');
  

const dispatch = useDispatch();

  
  const allFields = useSelector((state) => state.fieldData);




//estado local para paginado
const [currentPage, setCurrentPage] = useState(1);

const cardxPage = 9
const totalPages = Math.ceil(allFields.length / cardxPage);

//primer index -1 por ser array
const startIndex = (currentPage - 1) * cardxPage;


const endIndex = startIndex + cardxPage;

let currentCards = allFields.slice(startIndex, endIndex);


 //cambia la current page
 function pageHandler(pageNumber) {
  setCurrentPage(pageNumber);
}
 //manejador de prev y next
 const pagination = (event) =>{
  if (event.target.name === "next" && currentPage  * cardxPage < allFields.length ){
  setCurrentPage(currentPage +1)}
else if(event.target.name=== "prev" && startIndex!==0 ) setCurrentPage(currentPage -1)
}

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getHorarios());
    dispatch(getSports());
    dispatch(getField());
    dispatch(getCities());
    if (token === null) navigate('/login');
  }, [dispatch, token, navigate]);


  useEffect(() => {
    allFields.filter((field) =>
      field.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allFields , searchTerm]);

  // const filters = (event) => {
  //   dispatch(filter(event.target.value));
  // };

  // const handleSearchChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  return (
    <div>
    {/*   <NavBar handleSearchChange={handleSearchChange} /> */}
      <div className={style.homeContainer}>
        <div className={style.leftBox}>
          <Filters />
          <OrderByPrice />
        </div>
        <div className={style.cards}>
          {/* Pasa la cantidad correcta de tarjetas por página a Paginate */}
          
          <Cards allFields ={currentCards} />
          
        </div>

       
     <Paginate total={totalPages} page={pageHandler}/>
     <div className={style.button}>
     <button name="prev" onClick={pagination}>Prev Page</button>
     <button name="next" onClick={pagination}>Next Page</button>
     </div>

   

      </div>
    </div>
  );
};

export default Home;
