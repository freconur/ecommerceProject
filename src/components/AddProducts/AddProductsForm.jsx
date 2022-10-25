import React from "react";

const AddProductsForm = ({
  handleSubmitForm,
  colors,
  generos,
  marcas,
  categories,
  formData,
  setFormData,
}) => {
  const onChangeForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form id="agregar-productos" className="form" onSubmit={handleSubmitForm}>
      <h2>Agregar producto</h2>
      <div className="inputs__container">
        <div className="inputs">
          <div className="from_group__container">
            <label>nombre de producto</label>
            <input
              type="text"
              name="name"
              placeholder="nombre del producto"
              onChange={onChangeForm}
            />
          </div>
          <div className="from_group__container">
            <label>image</label>
            <input
              type="text"
              name="image"
              onChange={onChangeForm}
              placeholder="link de imagen"
            />
          </div>
          <div className="from_group__container">
            <label>description</label>
            <input
              type="text"
              name="description"
              onChange={onChangeForm}
              placeholder="descripcion"
            />
          </div>
          <div className="from_group__container">
            <label>precio</label>
            <input
              type="number"
              name="price"
              onChange={onChangeForm}
              placeholder="precio"
            />
          </div>
        </div>
        <div className="selects">
          <div className="from_group__container">
            <label>genero</label>
            <select name="generoId" onChange={onChangeForm}>
              <option value="">seleccionar</option>
              {generos.map((genero, index) => (
                <option key={index} value={genero.id}>
                  {genero.name}
                </option>
              ))}
            </select>
          </div>
          <div className="from_group__container">
            <label>color</label>
            <select name="colorId" onChange={onChangeForm}>
              <option value="">seleccionar</option>
              {colors.map((color, index) => (
                <option key={index} value={color.id}>
                  {color.name}
                </option>
              ))}
            </select>
          </div>
          <div className="from_group__container">
            <label>marca</label>
            <select name="marcaId" onChange={onChangeForm}>
              <option value="">seleccionar</option>
              {marcas.map((marca, index) => (
                <option key={index} value={marca.id}>
                  {marca.name}
                </option>
              ))}
            </select>
          </div>
          <div className="from_group__container">
            <label>categorias</label>
            <select name="categoryId" onChange={onChangeForm}>
              <option value="">seleccionar</option>
              {categories.map((category, index) => (
                <option key={index} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <button className="button__add-product">Agregar producto</button>
    </form>
  );
};
export default AddProductsForm;
