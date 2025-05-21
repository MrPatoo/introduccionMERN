import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../components/navbar.css"
import zgas from "../assets/images.jpg"

const NavBar = () => {

  return (

    <nav className="navbar">
      <div className="contenedor">
        <div>
         <a href="/"><p>zgas</p></a>
        
        </div>
        <ul className="lista">
          <li>
            <a href="/products"><p>productos</p></a>
          </li>
          <li>
            <a href="/branches"><p>Sucursales</p></a>
          </li> 

        </ul>

      </div>
    </nav>
  );
};
  
export default NavBar;
