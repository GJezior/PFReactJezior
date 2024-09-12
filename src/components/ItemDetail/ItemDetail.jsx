import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product }) => {

  const { addItems } = useContext(CartContext);

  const onAdd = (quantity) => {
    addItems(product, quantity);
  };
  return (
    <div>
        <img src={product.image} alt={product.name}/>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>U$S {product.price}</p>
        <p>Stock: {product.stock}</p>
        <p>Marca: {product.category}</p>

        <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>

        <Link to="/cart">Finalizar la compra</Link>
    </div>
  );
};

export default ItemDetail;