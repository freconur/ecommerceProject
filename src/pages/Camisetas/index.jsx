import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCamisetas, setSortByName, setZapatillas } from "../../redux/action";
import { ZapatillasCard } from "../../components/ZapatillasCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter as filter } from "@fortawesome/free-solid-svg-icons";
import "./products.css";
import OptionFilter from "./OptionFilter";
import { NotFound } from "../../components/NotFound";
const Camisetas = () => {
  const [activeOption, setActiveOption] = useState(false);
  const [checkboxClean, setCheckboxClean] = useState(null);
  const { camisetas } = useSelector(
    (rootReducer) => rootReducer.camisetasReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCamisetas());
    const clist = document.getElementsByTagName("input");
    for (const el of clist) {
      el.checked = checkboxClean;
    }
  }, [checkboxClean]);
  const onchangeOrderName = (e) => {
    return dispatch(setSortByName(e.target.value));
  };
  console.log("activeOption", activeOption);

  return (
    <div className="products">
      <div className="navbarLeft__container">
        <OptionFilter
          setActiveOption={setActiveOption}
          activeOption={activeOption}
          camisetas={camisetas}
          setCheckboxClean={setCheckboxClean}
        />
        {/* //////////solo cuando sea resposive/////////////// */}
        <div className="filter_container_response">
          <div className="container_fixed">
            <div
              onClick={() => setActiveOption(!activeOption)}
              className="filter_button_response"
            >
              <div>
                <FontAwesomeIcon icon={filter} />
                <span>Filtrar</span>
              </div>
            </div>
            <div className="productSort__container">
              <div className="sort_reponsive_container">
                <p className="label">Ordernar por</p>
                <select className="select_sort" onChange={onchangeOrderName}>
                  <option>seleccionar</option>
                  <option className="option" value="ascendente">
                    A-Z
                  </option>
                  <option className="option" value="descendente">
                    Z-A
                  </option>
                  <option className="option" value="precioAlto">
                    Precio mas alto
                  </option>
                  <option className="option" value="precioBajo">
                    Precio mas bajo
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* //////////solo cuando sea resposive/////////////// */}
      </div>
      <div className="products__container">
        <div className="productSort__container productSort_disabled">
          <p className="label">Ordernar por</p>
          <select className="select_sort" onChange={onchangeOrderName}>
            <option>seleccionar</option>
            <option className="option" value="ascendente">
              A-Z
            </option>
            <option className="option" value="descendente">
              Z-A
            </option>
            <option className="option" value="precioAlto">
              Precio mas alto
            </option>
            <option className="option" value="precioBajo">
              Precio mas bajo
            </option>
          </select>
        </div>
        {camisetas.length > 0 ? (
          <ul className="products__list">
            {camisetas.map((zapatilla, index) => (
              <ZapatillasCard key={index} zapatilla={zapatilla} />
            ))}
          </ul>
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};

export { Camisetas };
