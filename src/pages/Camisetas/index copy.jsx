import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCamisetas, setSortByName, setZapatillas } from "../../redux/action";
import { ZapatillasCard } from "../../components/ZapatillasCard";
import "./zapatillas.css";
import OptionFilter from "./OptionFilter";
const Camisetas = () => {
  // const { zapatillas } = useSelector((state) => state);
  const {camisetas} = useSelector(rootReducer => rootReducer.camisetasReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCamisetas());
  }, []);
  const onchangeOrderName = (e) => {
    return dispatch(setSortByName(e.target.value));
  };
  // console.log('zapatitoRoto',zapatillas)
  return (
    <div className="products">
      <div className="navbarLeft__container">
        <OptionFilter zapatillas={camisetas} />
      </div>
      <div className="zapatillas__container">
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
        <ul className="zapatillas__list">
          {camisetas &&
            camisetas.map((zapatilla, index) => (
              <ZapatillasCard key={index} zapatilla={zapatilla} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export { Camisetas };
