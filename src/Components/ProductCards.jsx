import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const ProductCards = () => {
  const { category } = useParams();
  const productsData = useLoaderData();
  const [products, setProducts] = useState([]);
  // console.log(category);
  // console.log(productsData);
  useEffect(() => {
    if (category) {
      const filterProducts = [...productsData].filter(
        (product) => product.category === category
      );
      setProducts(filterProducts);
    } else {
      setProducts(productsData);
    }
  }, [category, productsData]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
      {products.map((product) => (
        <Card key={product.id} product={product}></Card>
      ))}
    </div>
  );
};

export default ProductCards;
