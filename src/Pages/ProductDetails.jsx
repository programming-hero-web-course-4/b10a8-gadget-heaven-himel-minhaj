import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { HiOutlineStar } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";

import Heading from "../Components/Heading";
import { addToCart, addToWishList, getAllAddtoCart } from "../Utils/Index";
import { Helmet } from "react-helmet";

const ProductDetails = () => {
  const { ProductId } = useParams();
  const productsData = useLoaderData();
  const [product, setProduct] = useState({});
  const [isAddToCart, setIsAddToCart] = useState(false);
  // console.log(ProductId);
  useEffect(() => {
    const findProduct = [...productsData].find(
      (product) => product.id === ProductId
    );
    setProduct(findProduct);
    const addCart = getAllAddtoCart();
    const isExist = addCart.find((p) => p.id == findProduct.id);
    if (isExist) {
      setIsAddToCart(true);
    }
  }, [ProductId, productsData]);
  const {
    image,
    title,
    price,
    availability,
    description,
    specification,
    rating,
  } = product;
  const handleAddToCart = (product) => {
    addToCart(product);
    // getAllAddtoCart();
    setIsAddToCart(true);
  };
  const handleAddtoaWishList = (product) => {
    addToWishList(product);
  };
  return (
    <div className="relative  ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gadged Haven/Product Details</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Heading
        title={"Product Details"}
        subTitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
        // -bottom-96 left-44
      ></Heading>
      <div className="md:w-2/3  mx-auto md:my-4 card card-side bg-base-100 shadow-2xl md:absolute md:right-1/2 md:-translate-y-1/4 md:translate-x-1/2  ">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>price : $ {price}</p>
          <p>
            {availability ? (
              <button className=" btn btn-success">instock</button>
            ) : (
              ""
            )}
          </p>
          <p>{description}</p>
          <p className="font-bold">specification:</p>
          {/* <li>{specification}</li> */}

          <p>
            {specification && specification.map((i) => <li key={i}>{i}</li>)}
          </p>
          <p className="flex gap-2 items-center text-2xl ">
            Rating
            <small className="text-orange-400 text-2xl">
              <HiOutlineStar></HiOutlineStar>
            </small>
          </p>
          <div className="flex gap-3">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="font-bold">{rating}</p>
          </div>

          <div className="card-actions  md:flex items-center justify-end">
            <button
              disabled={isAddToCart}
              onClick={() => handleAddToCart(product)}
              className="btn btn-primary"
            >
              Add To Card
            </button>
            <p
              onClick={() => handleAddtoaWishList(product)}
              className=" text-5xl   text-black "
            >
              <FaHeart className="border rounded-full text-red-700 p-2 bg-slate-300"></FaHeart>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
