import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./zapatillaCard.css";
const ZapatillasCard = ({ zapatilla }) => {
  return (
    <li className="zapatillaCard">
      <Link
        to={`/product-detail/${zapatilla.id}`}
        className="zapatillaCard__link"
      >
        <div className="zapatillaCard__image--contianer">
          <img className="zapatillaCard__image" src={zapatilla.image} />
        </div>
        <div className="info_container_responsive">
        <h3 className="zapatillaCard__title">{zapatilla.marca.name}</h3>
        <p>{zapatilla.name}</p>
        <div className="price_container">
          <span>Online</span>
          <p className="zapatillaCard__price">S/ {zapatilla.price}</p>
        </div>

        </div>
      </Link>
    </li>
  );
};

export { ZapatillasCard };
