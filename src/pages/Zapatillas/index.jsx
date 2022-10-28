import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortByName, setZapatillas } from "../../redux/action";
import { ZapatillasCard } from "../../components/ZapatillasCard";
import "../Camisetas/products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter as filter } from "@fortawesome/free-solid-svg-icons";
import OptionFilter from "./OptionFilter";
import { NotFound } from "../../components/NotFound";
const Zapatillas = () => {
  const [activeOption, setActiveOption] = useState(false);

  const {zapatillas} = useSelector(rootReducer => rootReducer.productsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setZapatillas());
  }, []);
  const onchangeOrderName = (e) => {
    return dispatch(setSortByName(e.target.value));
  };
  return (
    <div className="products">
      <div className="navbarLeft__container">
        <OptionFilter zapatillas={zapatillas} 
        setActiveOption={setActiveOption}
        activeOption={activeOption}
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
            <option>
              seleccionar
            </option>
            <option className="option"  value="ascendente">
              A-Z
            </option>
            <option className="option"  value="descendente">
              Z-A
            </option>
            <option className="option"  value="precioAlto">
              Precio mas alto
            </option>
            <option className="option"  value="precioBajo">
              Precio mas bajo
            </option>
          </select>
        </div>
        {zapatillas.length > 0 ? (
          <ul className="products__list">
            {zapatillas.map((zapatilla, index) => (
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

export { Zapatillas };
