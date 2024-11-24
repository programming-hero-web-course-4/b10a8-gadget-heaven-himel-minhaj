import toast from "react-hot-toast";

// get LocalStorage data
const getAllAddtoCart = () => {
  const alldata = localStorage.getItem("addCart");
  if (alldata) {
    // console.log(alldata);
    const addToCart = JSON.parse(alldata);
    return addToCart;
  } else {
    // console.log([]);
    return [];
  }
};
// add
const addToCart = (product) => {
  // console.log(product);
  const addCart = getAllAddtoCart();
  const isExist = addCart.find((p) => p.id == product.id);
  if (isExist) {
    return toast.error("Already Exist");
  }
  addCart.push(product);
  localStorage.setItem("addCart", JSON.stringify(addCart));
  toast.success("Successfully Added!");
};
// remove
const removeAddCart = (id) => {
  const addCart = getAllAddtoCart();
  const remain = addCart.filter((p) => p.id !== id);
  localStorage.setItem("addCart", JSON.stringify(remain));
  toast.success("Successfully Removed!");
}

// add card here end

const getAllWishList = () => {
  const alldata = localStorage.getItem("wishList");
  if (alldata) {
    // console.log(alldata);
    const addTowishList = JSON.parse(alldata);
    return addTowishList;
  } else {
    // console.log([]);
    return [];
  }
};
// add
const addToWishList = (product) => {
  // console.log(product);
  const addWishList = getAllWishList();
  const isExist = addWishList.find((p) => p.id == product.id);
  if (isExist) {
    return toast.error("Already Exist");
  }
  addWishList.push(product);
  localStorage.setItem("wishList", JSON.stringify(addWishList));
  toast.success("Successfully Added!");
};
// remove
const removeWishList = (id) => {
  const addWishList = getAllWishList();
  const remain = addWishList.filter((p) => p.id !== id);
  localStorage.setItem("wishList", JSON.stringify(remain));
  toast.success("Successfully Removed!");
};

export { addToCart, getAllAddtoCart,removeAddCart ,addToWishList,getAllWishList,removeWishList };
