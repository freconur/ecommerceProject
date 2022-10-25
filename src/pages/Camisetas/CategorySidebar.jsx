import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown as arrowDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight as arrowRight } from "@fortawesome/free-solid-svg-icons";
import { setProductsFilterByGenero } from "../../redux/action";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const CategorySidebar = ({
  sidebarGeneros,
  setSidebarGeneros,
  activeArrow,
  setActiveArrow,
  generos,
  camisetas,
  forceUpdate,
  setCheckboxClean
}) => {
  const [checkboxValue, setCheckboxValue] = useState(true)
  const navigation = useNavigate()
  const dispatch = useDispatch();
  const handleClickCategory = (e) => {
    // window.location.href = window.location.href
    setCheckboxValue(!checkboxValue)//false
    let value = false
    setCheckboxClean(value) //
    dispatch(setProductsFilterByGenero(e.target.value))
    // setCheckboxClean(null) //
    forceUpdate()
  };
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
            {/* <Link onClick={handleClickCategory} to="/camisetas"> */}
            <button name={genero.name} value={genero.id}>{genero.name}</button>
            {/* </Link> */}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default CategorySidebar;
