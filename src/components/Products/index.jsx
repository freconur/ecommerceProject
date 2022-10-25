import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/action";
import { ProductCard } from "../ProductCard";
const Products = () => {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProducts());
  }, []);
  console.log("products:", products);
  return (
    <div className="Home">
      <div className="products__container">
        <ul className="products__listContianer">
          {products &&
            products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export { Products };
