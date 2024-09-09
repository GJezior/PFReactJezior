import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({product}) => {
  return (
    <div>
        <img src={product.image} alt={product.name}/>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>U$S {product.price}</p>
        <p>Stock: {product.stock}</p>
        <p>Marca: {product.category}</p>

        <ItemCount initial={1} stock={product.stock}/>

    </div>
  )
}

export default ItemDetail