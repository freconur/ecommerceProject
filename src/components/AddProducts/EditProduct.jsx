import React, { useReducer, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  setCategories,
  setColors,
  setGeneros,
  setMarcas,
  setZapatillaDetails,
  updateProduct,
} from "../../redux/action";

const EditProduct = () => {
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  const [inputValue, setInputValue] = useState(0);
  const [inputValueUpdate, setInputValueUpdate] = useState([]);
  //   const [desOrDis, setDesOrDis] = useState(disabled);
  const { zapatillasDetail, marcas, categories, colors, generos } = useSelector(
    (rootReducer) => rootReducer.productsReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMarcas());
    dispatch(setCategories());
    dispatch(setColors());
    dispatch(setGeneros());
  }, [zapatillasDetail,reducerValue]);

  const handleActiveInputs = (e) => {
    e.preventDefault()
    const inputs = document.getElementsByName("desabledActive");
    inputs.forEach((item) => {
      item.removeAttribute("disabled");
      item.setAttribute("desabled", "");
    });
  };
  const onChangeForm = (e) => {
    const value = e.target.value;
    setInputValue(parseInt(value, 10));
  };
  const handleSearchById = () => {
    if (inputValue) {
      dispatch(setZapatillaDetails(inputValue));
    }
  };
  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };
  const onChangeInputValue = (e) => {
    setInputValueUpdate({
      ...inputValueUpdate,
      [e.target.id]: e.target.value,
    });
  };
  const handleUpdateProduct = (id) => {
    dispatch(updateProduct(id, inputValueUpdate))
    dispatch(setZapatillaDetails(inputValue));
    forceUpdate()
    const inputs = document.getElementsByName("desabledActive");
    inputs.forEach((item) => {
      item.removeAttribute("desabled");
      item.setAttribute("disabled", '');
      item.setAttribute("value", '');
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
  }
  return (
    <>
      <div id="buscar-productos" className="form">
        <h2>Buscar producto</h2>

        <div className="from_group__container">
          <label>Id de producto</label>
          <input
            type="text"
            name="name"
            placeholder="id del producto"
            onChange={onChangeForm}
          />
        </div>
        <button onClick={handleSearchById} className="button__add-product">
          buscar
        </button>
      </div>
      {zapatillasDetail === "AxiosError" ? (
        <h1>No se encontraron resultados</h1>
      ) : zapatillasDetail.length === 0 ? (
        <></>
      ) : (
        <form onSubmit={handleSubmit} className="product_info">
          <div className="form__close">cerrar</div>
          <div className="product_info__container">
            <div className="product_info_image">
              <img src={zapatillasDetail.image} alt="" />
            </div>
            <div className="input_info__container">
              <div className="input_info--container">
                <div className="from_group__container">
                  <label>Nombre</label>
                  <input
                    onChange={onChangeInputValue}
                    name="desabledActive"
                    id="name"
                    disabled
                    placeholder={zapatillasDetail.name}
                  />
                </div>
                <div className="from_group__container">
                  <label>Imagen</label>
                  <input
                    onChange={onChangeInputValue}
                    name="desabledActive"
                    id="image"
                    disabled
                    placeholder={zapatillasDetail.image}
                  />
                </div>
                <div className="from_group__container">
                  <label>Descripcion</label>
                  <input
                    onChange={onChangeInputValue}
                    name="desabledActive"
                    id="description"
                    disabled
                    placeholder={zapatillasDetail.description}
                  ></input>
                </div>
                <div className="from_group__container">
                  <label>Precio</label>
                  <input
                  type="number"
                    onChange={onChangeInputValue}
                    name="desabledActive"
                    id="price"
                    disabled
                    placeholder={zapatillasDetail.price}
                  />
                </div>
              </div>
              <div className="input_info--container">
                <div className="from_group__container">
                  <label>Marca</label>
                  <select
                    onChange={onChangeInputValue}
                    name="desabledActive"
                    id="marca"
                    disabled
                    placeholder={zapatillasDetail.marca.name}
                  >
                    <option disabled value="">
                      {zapatillasDetail.marca.name}
                    </option>
                    {marcas.map((marca, index) => (
                      <option key={index} value={marca.id}>{marca.name}</option>
                    ))}
                  </select>
                </div>
                <div className="from_group__container">
                  <label>categoria</label>
                  <select
                    onChange={onChangeInputValue}
                    name="desabledActive"
                    id="categoryId"
                    disabled
                  >
                    <option disabled value="">
                      {zapatillasDetail.category.name}
                    </option>
                    {categories.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="from_group__container">
                  <label>Color</label>
                  <select
                  id="colorId"
                    onChange={onChangeInputValue}
                    name="desabledActive"
                    disabled
                  >
                    <option disabled>{zapatillasDetail.color.name} </option>
                    {colors.map((color, index) => (
                      <option key={index} value={color.id}>
                        {color.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="from_group__container">
                  <label>Genero</label>
                  <select
                  id="generoId"
                    onChange={onChangeInputValue}
                    name="desabledActive"
                    disabled
                  >
                    <option disabled>{zapatillasDetail.genero.name} </option>
                    {generos.map((genero, index) => (
                      <option key={index} value={genero.id}>
                        {genero.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="product_info__button">
            <div>
              <button onClick={handleActiveInputs} className="edit">
                editar
              </button>
              <button
                onClick={() => handleDeleteProduct(zapatillasDetail.id)}
                className="delete"
              >
                borrar
              </button>
            </div>
            <button onClick={() => handleUpdateProduct(zapatillasDetail.id)} className="update">actualizar</button>
          </div>
        </form>
      )}
    </>
  );
};

export { EditProduct };
