import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-col gap-3">
      <NavLink
        to="/"
        className={({ isActive }) => `btn ${isActive ? "btn-error" : ""}`}
      >
        All Products
      </NavLink>
      <div className="flex flex-col gap-3">
        {categories.map((category, idx) => (
          <NavLink
            to={`/category/${category.category}`}
            key={idx}
            className={({ isActive }) => `btn ${isActive ? "btn-error" : ""}`}
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
