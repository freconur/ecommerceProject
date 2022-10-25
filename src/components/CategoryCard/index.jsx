import React from "react";
import { Link } from "react-router-dom";
import './categoryCard.css'
const CategoryCard = ({ category }) => {
  return (
      <Link className="categoryCard__link categoryCard" to={category.name}>
    {/* <div className="categoryCard"> */}
    <div className="overlay"></div>
        <h1 className="categoryCard__title">{category.name}</h1>
        <img className="categoryCard__image" src={category.image} />
    {/* </div> */}
      </Link>
  );
};

export { CategoryCard };
