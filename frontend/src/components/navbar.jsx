import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../components/navbar.css"

const NavBar = () => {

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-bold">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-gray-300 hover:text-gray-400"
            }
          >
            Zgas
          </NavLink>
        </div>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold"
                  : "text-gray-300 hover:text-gray-400"
              }
            >
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/branches"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold"
                  : "text-gray-300 hover:text-gray-400"
              }
            >
              Sucursales
            </NavLink>
          </li>
         

        </ul>

      </div>
    </nav>
  );
};
  
export default NavBar;
