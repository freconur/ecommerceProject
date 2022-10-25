import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  setCategories,
  setColors,
  setGeneros,
  setMarcas,
} from "../../redux/action";
import "./addProducts.css";
import AddProductsForm from "./AddProductsForm";
import { EditProduct } from "./EditProduct";
import { OrdersManagement } from "./OrdersManagement";
const AddProducts = () => {
  const [formData, setFormData] = useState([]);
  const { generos,marcas, colors, categories } = useSelector((rootReducer) => rootReducer.productsReducer);
  const dispatch = useDispatch();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(createProduct(formData));
  };
  useEffect(() => {
    dispatch(setMarcas());
    dispatch(setColors());
    dispatch(setGeneros());
    dispatch(setCategories());
  }, []);

  return (
    <div className="settings_products__container">
      <AddProductsForm
        formData={formData}
        setFormData={setFormData}
        handleSubmitForm={handleSubmitForm}
        generos={generos}
        marcas={marcas}
        categories={categories}
        colors={colors}
      />
      <EditProduct />
      <OrdersManagement />
    </div>
  );
};

export { AddProducts };
