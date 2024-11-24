import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Heading = ({ title, subTitle }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // console.log(pathname);
  return (
    <div className="bg-[#9538E2] rounded-b-xl p-4 ">
      <div className=" text-center text-white w-2/3 mx-auto px-3 ">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className={`my-4 ${pathname == "/" ? "" : "pb-24"}`}>{subTitle}</p>
        {pathname == "/" ? (
          <button className="btn btn-error mb-60">Shop Now</button>
        ) : (
          ""
        )}
        {pathname == "/dashboard/dashboard1" ? (
          <div className="flex justify-center gap-3">
            <NavLink
              className={({ isActive }) =>
                `btn font-bold ${isActive ? "btn-warning" : "btn"}`
              }
              to="/dashboard"
              className="btn"
            >
              Cart
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `btn font-bold ${isActive ? "btn-warning" : "btn"}`
              }
              to="/dashboard/dashboard1"
              
            >
              Wishlist
            </NavLink>
          </div>
        ) : (
          ""
        )}
        {pathname == "/dashboard" ? (
          <div className="flex justify-center gap-3">
            <NavLink
              className={({ isActive }) =>
                `btn font-bold ${isActive ? "btn-warning" : "btn"}`
              }
              to="/dashboard"
            >
              Cart
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `btn font-bold ${isActive ? "btn-warning" : "btn"}`
              }
              to="/dashboard/dashboard1"
             
            >
              Wishlist
            </NavLink>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Heading;
