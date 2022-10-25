import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown as arrowDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight as arrowRight } from "@fortawesome/free-solid-svg-icons";
const MarcaSidebar = ({
  setSidebarMarcas,
  sidebarMarcas,
  activeArrow,
  setActiveArrow,
  marcas,
  handleCheckValue
}) => {
  return (
    <li className="list">
      <div onClick={() => {return( setSidebarMarcas(!sidebarMarcas),  setActiveArrow(!activeArrow))}} className="text_list">
        <p className="text_list__name">Marcas</p>
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
          sidebarMarcas ? "marcaActive" : ""
        }`}
      >
        {marcas.map((marca, index) => (
          <li className="marca_list" key={index}>
            {/* <Link to="/">{marca.name}</Link> */}
            <input
              name="marcas"
              className="checkbox"
              // onChange={handleCheckboxMarca}
              onChange={handleCheckValue}
              type="checkbox"
              value={marca.id}
            />
            <span>{marca.name}</span>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default MarcaSidebar;
