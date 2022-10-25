import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCamisetas, setSortByName, setZapatillas } from "../../redux/action";
import { ZapatillasCard } from "../../components/ZapatillasCard";
import "./products.css";
import OptionFilter from "./OptionFilter";
import { NotFound } from "../../components/NotFound";
const Camisetas = () => {
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
  return (
    <div className="products">
      <div className="navbarLeft__container">
        <OptionFilter
          camisetas={camisetas}
          setCheckboxClean={setCheckboxClean}
        />
      </div>
      <div className="products__container">
        <div className="productSort__container">
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
