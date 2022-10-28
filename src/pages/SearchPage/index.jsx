import React, { useReducer } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  setSortByName,
  setStore,
} from "../../redux/action";
import { ZapatillasCard } from "../../components/ZapatillasCard";
import "../Camisetas/products.css";
import OptionFilter from "./OptionFilter";
import { NotFound } from "../../components/NotFound";
const SearchPage = () => {
  const { store, storeFilter } = useSelector((rootReducer) => rootReducer.storeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStore());
    dispatch(setProducts())
  }, [dispatch]);
  const onchangeOrderName = (e) => {
    return dispatch(setSortByName(e.target.value, e.target.name));
  };
  if(storeFilter.length === 0) {
    return (
      <div className="zapatillas">
        <div className="navbarLeft__container">
          <OptionFilter />
        </div>
        <div className="zapatillas__container">
          <div className="productSort__container">
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
            <ul className="zapatillas__list">
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
    <div className="zapatillas">
      <div className="navbarLeft__container">
        <OptionFilter />
      </div>
      <div className="zapatillas__container">
        <div className="productSort__container">
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
          <ul className="zapatillas__list">
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
