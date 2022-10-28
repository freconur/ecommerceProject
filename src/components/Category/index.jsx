import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../redux/action";
import { CategoryCard } from "../CategoryCard";
import './category.css'
import './category-responsive.css'
const Category = () => {
  const { categories } = useSelector(rootReducer => rootReducer.productsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCategories());
  }, []);
  return (
    <div className="category">
        <section className="category__List">
          {categories &&
            categories.map((category, index) => (
                <CategoryCard key={index} category={category} />
            ))}
        </section>
    </div>
  );
};

export { Category };
