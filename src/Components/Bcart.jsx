import React from "react";
import { TiDelete } from "react-icons/ti";

const Bcart = ({ product, handleRemove }) => {
  const { title, image, price, id, description } = product;
  return (
    <div className="p-10 bg-slate-200 rounded-2xl mb-5">
      <div className="card card-side  shadow-xl">
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>{description}</p>
          <p className="font-bold">price :{price}</p>
        </div>
        <div>
          <button onClick={() => handleRemove(id)} className="btn">
            <TiDelete className="text-2xl cursor-pointer"></TiDelete>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bcart;
