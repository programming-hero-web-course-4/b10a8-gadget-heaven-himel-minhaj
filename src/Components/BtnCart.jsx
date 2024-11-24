import { useEffect, useState } from "react";
import { BsSortNumericUp } from "react-icons/bs";
import { getAllAddtoCart, removeAddCart } from "../Utils/Index";
import Bcart from "./Bcart";
import modulimg from "../assets/Group.png";

const BtnCart = () => {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);
  console.log(price);

  useEffect(() => {
    const addCart = getAllAddtoCart();
    const singlePrice = addCart.map((p) => p.price);
    const totalPrice = singlePrice.reduce((a, b) => a + b, 0);
    setPrice(totalPrice);

    setProducts(addCart);
  }, []);
  const handleRemove = (id) => {
    removeAddCart(id);
    const addCart = getAllAddtoCart();
    setProducts(addCart);
  };
  const handleSort = (sortBy) => {
    if (sortBy == "price") {
      const sorted = getAllAddtoCart().sort((a, b) => b.price - a.price);
      setProducts(sorted);
    }
  };
  const handlePurches = () => {
    setProducts([]);
    localStorage.removeItem("addCart");
    
    my_modal_5.showModal();
  };
  const handlePurchesZero = () => {
   setPrice(0); 
  }

  return (
    <div>
      <div className="md:flex justify-between mt-5">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="flex justify-center gap-4">
          <h1 className="text-2xl font-bold flex items-center">
            Total cost: {price.toFixed(2)}
          </h1>
          <button
            onClick={() => handleSort("price")}
            className="btn btn-warning rounded-full flex justify-center items-center text-2xl font-bold gap-2 "
          >
            Sort By Price
            <small className="text-2xl font-bold">
              <BsSortNumericUp></BsSortNumericUp>
            </small>
          </button>
          <button
            type="button"
            onClick={() => handlePurches()}
            className="btn rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white  "
          >
            Purches
          </button>
        </div>
      </div>
      <div className="flex  flex-col gap-3 mt-5 ">
        {products.map((product) => (
          <Bcart
            key={product.id}
            product={product}
            handleRemove={handleRemove}
          ></Bcart>
        ))}
      </div>
      {/* modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex items-center justify-center">
            <img src={modulimg} alt="" />
          </div>
          <h1 className="py-4 text-lg font-bold flex items-center justify-center">
            Payment Successfully
          </h1>
          <p className="flex items-center justify-center">
            Thanks for purchasing. Total:{price}
          </p>
          <div className="modal-action flex items-center justify-center">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={() => handlePurchesZero()} className="btn">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default BtnCart;
