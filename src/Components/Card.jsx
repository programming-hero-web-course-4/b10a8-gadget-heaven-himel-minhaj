/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  // console.log(product);
  const { title, image, price,id } = product;
  return (
    <div>
      <div className="card card-compact bg-base-100 w-full h-80 shadow-xl my-4">
        <figure className=" px-4 w-full bg-slate-400">
          <img className=" w-full h-52 object-cover" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>price: {price} k</p>
          <div className="card-actions justify-start">
            <Link
              to={`/ProductDetails/${id}`}
              className="btn border rounded-3xl border-warning "
            >
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
