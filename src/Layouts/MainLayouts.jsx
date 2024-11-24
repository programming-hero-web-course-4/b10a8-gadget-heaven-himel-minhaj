import React from "react";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

import  { Toaster } from "react-hot-toast";


const MainLayouts = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Toaster></Toaster>
      {/* navber */}
      <div className="  ">
        <Navber></Navber>
      </div>

      {/* outlate */}

      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>

      {/* footer  */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
