import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPantalones, setSortByName, setZapatillas } from "../../redux/action";
import { ZapatillasCard } from "../../components/ZapatillasCard";
import "../Camisetas/products.css";
import OptionFilter from "./OptionFilter";
import { NotFound } from "../../components/NotFound";
const Pantalones = () => {
  // const { zapatillas } = useSelector((state) => state);
  const {pantalones} = useSelector(rootReducer => rootReducer.pantalonesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPantalones());
  }, []);
  const onchangeOrderName = (e) => {
    return dispatch(setSortByName(e.target.value));
  };
  return (
    <div className="products">
      <div className="navbarLeft__container">
        <OptionFilter pantalones={pantalones} />
      </div>
      <div className="products__container">
        <div className="productSort__container">
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
        {pantalones.length > 0 ? (
          <ul className="products__list">
            {pantalones.map((zapatilla, index) => (
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

export { Pantalones };
