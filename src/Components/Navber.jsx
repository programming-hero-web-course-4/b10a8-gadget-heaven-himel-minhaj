import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { TbShoppingCart } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";

const Navber = () => {
  const { pathname } = useLocation();
  // console.log(pathname);
  return (
    <div
      className={`${
        pathname == "/" ? "bg-[#9538E2] text-white" : "bg-white text-black"
      } rounded-t-xl navbar mt-5  `}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink
              className={({ isActive }) =>
                ` font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="/Statistics"
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            {/* <li>home</li> */}
          </ul>
        </div>
        <NavLink to="/" className=" text-xl font-bold">
          Gadget Heaven
        </NavLink>
      </div>
      <div className="navbar-center flex hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          <NavLink
            className={({ isActive }) =>
              ` font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              ` font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
            }
            to="/Statistics"
          >
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              ` font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          {/* <li>home</li> */}
        </ul>
      </div>
      <div className="navbar-end gap-6">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            ` font-bold ${
              isActive
                ? "text-red-600 p-2 bg-white text-black rounded-full"
                : "hover:text-warning"
            }`
          }
        >
          <TbShoppingCart></TbShoppingCart>
        </NavLink>
        <NavLink
          to="/dashboard/dashboard1"
          className={({ isActive }) =>
            ` font-bold ${
              isActive
                ? "text-red-600 p-2 bg-white text-black rounded-full"
                : "hover:text-warning"
            }`
          }
        >
          <FaRegHeart></FaRegHeart>
        </NavLink>
      </div>
    </div>
  );
};

export default Navber;
