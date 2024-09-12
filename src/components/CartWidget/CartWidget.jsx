import './CartWidget.css';
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';

const CartWidget = () => {

  const {getTotalProducts} = useContext(CartContext);

  return (

    <div className="nav-cart">
        <FaCartShopping />
        {getTotalProducts() === 0 ? null : getTotalProducts()}
    </div>
  );
};

export default CartWidget;