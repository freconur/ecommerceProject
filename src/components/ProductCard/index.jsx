import React from 'react'
import { Link } from 'react-router-dom'
const ProductCard = ({product}) => {
  return (
    <Link to='/'>
    <li className='productList__container'>
      <h1>{product.name}</h1>
      <p className='productList__description'>{product.description}</p>
      <p className='productList__description'>{product.price}</p>
      <img className='productList__image' src={product.image} />
    </li>
    </Link>
          
  )
}

export  {ProductCard}