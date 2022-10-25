import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setColorFilter,
  setColors,
  setGeneros,
  setMarcaFilter,
  setMarcas,
} from "../../redux/action";
import "../Camisetas/optionFilter.css";
import ColorSidebar from "./ColorSidebar";
import MarcaSidebar from "./MarcaSidebar";
import CategorySidebar from "./CategorySidebar";
const OptionFilter = ({pantalones}) => {
  const { marcas } = useSelector(rootReducer => rootReducer.productsReducer);
  const { colors } = useSelector(rootReducer => rootReducer.productsReducer);
  const { generos } = useSelector(rootReducer => rootReducer.productsReducer);
  const dispatch = useDispatch();
  const [sidebarMarcas, setSidebarMarcas] = useState(true);
  const [sidebarColors, setSidebarColors] = useState(true);
  const [sidebarGeneros, setSidebarGeneros] = useState(true);
  const [checkValueMarca, setCheckValueMarca] = useState([]);
  const [checkValue, setCheckValue] = useState([]);
  const [activeArrow, setActiveArrow] = useState(true);
  useEffect(() => {
    dispatch(setMarcas());
    dispatch(setColors());
    dispatch(setGeneros());
  }, []);
  
  const handleCheckValue = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const newCheckedMarcas = [...checkValueMarca];
    const newCheckedColor = [...checkValue];

    if (name === "colors") {
      const currentIndex = checkValue.indexOf(value);
      if (currentIndex === -1) {
        newCheckedColor.push(value);
      } else {
        newCheckedColor.splice(currentIndex, 1);
      }
      setCheckValue(newCheckedColor);
      return dispatch(setColorFilter(newCheckedColor, newCheckedMarcas));
    } else if (name === "marcas") {
      const currentIndex2 = newCheckedMarcas.indexOf(value);
      if (currentIndex2 === -1) {
        newCheckedMarcas.push(value);
      } else {
        newCheckedMarcas.splice(currentIndex2, 1);
      }
      setCheckValueMarca(newCheckedMarcas);
      dispatch(setMarcaFilter(newCheckedMarcas, newCheckedColor));
    }
    
  };
  return (
    <React.Fragment>
      <div className="sidebar_container">
        <h2 className="sidebar__title">
          Pantalones
          <div className="separador"> </div>
        </h2>
        <div className="products_list__container">
          <ul className="marcas__list">
            <CategorySidebar
              sidebarGeneros={sidebarGeneros}
              setSidebarGeneros={setSidebarGeneros}
              activeArrow={activeArrow}
              handleCheckValue={handleCheckValue}
              generos={generos}
              pantalones={pantalones}
              setActiveArrow={setActiveArrow}
            />
            <MarcaSidebar
              sidebarMarcas={sidebarMarcas}
              setSidebarMarcas={setSidebarMarcas}
              activeArrow={activeArrow}
              handleCheckValue={handleCheckValue}
              marcas={marcas}
              setActiveArrow={setActiveArrow}
            />
            <ColorSidebar
              handleCheckValue={handleCheckValue}
              activeArrow={activeArrow}
              setActiveArrow={setActiveArrow}
              sidebarColors={sidebarColors}
              setSidebarColors={setSidebarColors}
              colors={colors}
            />
            {/* <li className="list">
              <span>Precio</span>
            </li> */}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OptionFilter;
