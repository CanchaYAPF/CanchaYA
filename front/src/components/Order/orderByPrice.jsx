import { useDispatch } from "react-redux";
import style from '../NavBar/Navbar.module.css';

import { orderByPrice } from "../../Redux/actions/form_actions";

const OrderByPrice = () => {
  const dispatch = useDispatch();

  const onSelectedChange = (event) => {
    event.preventDefault();
    dispatch(orderByPrice(event.target.value));
  };

  return (
    <>
      <select className={style.filtros} onChange={onSelectedChange}>
        <option value="" hidden>
        Precio &#128176;
        </option>
        <option value="Ascendente">Ascendente ↑</option>
        <option value="Descendente">Descendente ↓ </option>
      </select>
    </>
  );
};

export default OrderByPrice;