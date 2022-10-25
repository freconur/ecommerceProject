import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown as arrowDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight as arrowRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setProductsFilterByGenero } from "../../redux/action";
const CategorySidebar = ({
  sidebarGeneros,
  setSidebarGeneros,
  activeArrow,
  setActiveArrow,
  generos,
  pantalones,
}) => {
  // const { pantalones } = useSelector(rootReducer => rootReducer.productsReducer)
  const dispatch = useDispatch();
  const handleClickCategory = (e) => {
    dispatch(setProductsFilterByGenero(e.target.value))
  };

  console.log("pantalones", pantalones);
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
        {generos.map((genero, index) => (
          <li onClick={handleClickCategory} className="genero_list" key={index}>
            <button name={genero.name} value={genero.id}>
              Zapatillas de {genero.name}
            </button>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default CategorySidebar;
