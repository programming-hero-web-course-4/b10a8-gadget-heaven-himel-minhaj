import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Statistics from "../Pages/Statistics";
import ProductCards from "../Components/ProductCards";
import ProductDetails from "../Pages/ProductDetails";
import BtnCart from "../Components/BtnCart";
import WishList from "../Components/WishList";
import ErrorPage from "../Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../category.json"),
        children: [
          {
            path: "/",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("../FakeProductsData.json"),
          },
          {
            path: "/category/:category",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("../FakeProductsData.json"),
          },
        ],
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/FakeProductsData.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard",
            element: <BtnCart></BtnCart>,
          },
          {
            path: "/dashboard/dashboard1",
            element: <WishList></WishList>,
          },
        ],
      },
      {
        path: "/ProductDetails/:ProductId",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/FakeProductsData.json"),
      },
    ],
  },
]);
export default router;
