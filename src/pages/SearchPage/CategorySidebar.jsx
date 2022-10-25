import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown as arrowDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight as arrowRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCategories } from "../../redux/action";
import { Link } from "react-router-dom";
const CategorySidebar = ({
  sidebarGeneros,
  setSidebarGeneros,
  activeArrow,
  setActiveArrow,
  generos,
}) => {
  const { categories } = useSelector(
    (rootReducer) => rootReducer.productsReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCategories());
  },[]);
  return (
    <li className="list">
      <div
        onClick={() => {
          return (
            setSidebarGeneros(!sidebarGeneros), setActiveArrow(!activeArrow)
          );
        }}
        className="text_list"
      >
        <p className="text_list__name">Categorias</p>
        <FontAwesomeIcon
          icon={arrowDown}
          className={`chevron_down arrow ${!activeArrow && "activeArrow"}`}
        />
        <FontAwesomeIcon
          icon={arrowRight}
          className={`chevron_right arrow ${activeArrow && "activeArrow"}`}
        />
      </div>
      <ul
        className={`marcas_list__container ${
          sidebarGeneros ? "categoryActive" : ""
        }`}
      >
        {categories.map((category, index) => (
          <li className="genero_list" key={index}>
            <Link to={`/${category.name}`}>
              <span>{category.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default CategorySidebar;
