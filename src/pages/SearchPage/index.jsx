import React, { useReducer, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  setSortByName,
  setStore,
} from "../../redux/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter as filter } from "@fortawesome/free-solid-svg-icons";
import { ZapatillasCard } from "../../components/ZapatillasCard";
import "../Camisetas/products.css";
import OptionFilter from "./OptionFilter";
import { NotFound } from "../../components/NotFound";
const SearchPage = () => {
  const { store, storeFilter } = useSelector((rootReducer) => rootReducer.storeReducer);
  const dispatch = useDispatch();
  const [activeOption, setActiveOption] = useState(false);
  const [checkboxClean, setCheckboxClean] = useState(null);
  useEffect(() => {
    dispatch(setStore());
    dispatch(setProducts())
  }, [dispatch]);
  const onchangeOrderName = (e) => {
    return dispatch(setSortByName(e.target.value, e.target.name));
  };
  if(storeFilter.length === 0) {
    return (
      <div className="products">
        <div className="navbarLeft__container">
          <OptionFilter 
          setActiveOption={setActiveOption}
          activeOption={activeOption}
          // camisetas={camisetas}
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
            <select name="store" className="select_sort" onChange={onchangeOrderName}>
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
            <ul className="products__list">
              {
              store.map((zapatilla, index) => (
                <ZapatillasCard key={index} zapatilla={zapatilla} />
              ))
              }
            </ul>
        </div>
      </div>
    )
  }
  return (
    <div className="products">
      <div className="navbarLeft__container">
        <OptionFilter 
        setActiveOption={setActiveOption}
        activeOption={activeOption}
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
          <select name="storeFilter" className="select_sort" onChange={onchangeOrderName}>
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
            {typeof storeFilter === "string"
            ? 
              // <p>{storeFilter}</p>//si no hay datos
              <NotFound />
            :
          <ul className="products__list">
            {
              storeFilter.map((zapatilla, index) => (
                <ZapatillasCard key={index} zapatilla={zapatilla} />
              ))
            }
          </ul>
            }
      </div>
    </div>
  );
};

export { SearchPage };
