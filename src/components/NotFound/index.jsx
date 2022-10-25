import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping as cart } from "@fortawesome/free-solid-svg-icons";
import './notFound.css'
const NotFound = () => {
  return (
    <div className='notFound'>
      <div className='icon'>
        <FontAwesomeIcon className='icon_cart' icon={cart} />
        <p>No se encontraron resultados de la busqueda!</p>
      </div>
    </div>
  )
}

export {NotFound}