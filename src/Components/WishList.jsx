import React, { useEffect, useState } from "react";
import { getAllWishList, removeWishList } from "../Utils/Index";
import WishCart from "./WishCart";

const WishList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const addWishList = getAllWishList();
    setProducts(addWishList);
  }, []);
  const handleRemove = (id) => {
    removeWishList(id);
   const addWishList = getAllWishList();
   setProducts(addWishList);
  };

  return (
    <div className="mt-5">
      <div>
        <h1 className="text-2xl font-bold">Wishlist</h1>
      </div>

      <div className="flex  flex-col gap-3 mt-5 ">
        {products.map((product) => (
          <WishCart
            key={product.id}
            product={product}
            handleRemove={handleRemove}
          ></WishCart>
        ))}
      </div>
    </div>
  );
};

export default WishList;
