import React from "react";
import { NavLink } from "react-router-dom";
import "./BarraNavegacion.css";
import Icono from "../../assets/icono.png";

function BarraNavegacion() {
  return (
    <div className="row class_icono">
      <div className="navbar navbar-expand-lg class_navbar">
        <NavLink to="/">
          <img src={Icono} alt="icono" />
        </NavLink>

        <div className="class_nav">
          <NavLink to="/" className="btn btn-outline-light">
            Inicio
          </NavLink> 
          <NavLink to="/personajes" className="btn btn-outline-light">
            Personajes
          </NavLink>
          <NavLink to="/contacto" className="btn btn-outline-light">
            Contactos
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default BarraNavegacion;
