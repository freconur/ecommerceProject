import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown as arrowDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight as arrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
const ColorSidebar = ({
  handleCheckValue,
  activeArrow,
  setActiveArrow,
  sidebarColors,
  setSidebarColors,
  colors,
}) => {
  const { camisetasCopy } = useSelector(
    (rootReducer) => rootReducer.camisetasReducer
    );
const [colorCategory, setColorCategory] = useState([]);
const categoriesColors = [];
  const array = [];
  camisetasCopy.map((item) => {
    const currentIndex = array.indexOf(item.color.name);
    if (currentIndex === -1) {
      array.push(item.color.name);
      categoriesColors.push(item.color);
    }
  });
const handleClickList = () => {
  setColorCategory(categoriesColors)
}
  return (
    <li className="list">
      <div onClick={() => {return( setSidebarColors(!sidebarColors),  setActiveArrow(!activeArrow), handleClickList())}} className="text_list">
        <p className="text_list__name">Color</p>
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
          sidebarColors ? "categoryActive" : ""
        }`}
      >
        {colorCategory.map((color, index) => (
          <li className="marca_list" key={index}>
            <input
              name="colors"
              className="checkbox"
              onChange={handleCheckValue}
              type="checkbox"
                value={color.id}
            />
            <span>{color.name}</span>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ColorSidebar;
