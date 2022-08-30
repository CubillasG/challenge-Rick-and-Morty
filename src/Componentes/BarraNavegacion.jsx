import React from "react";
import { NavLink } from "react-router-dom";
import './BarraNavegacion.css'

function BarraNavegacion() {
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light bg-light clase_nav">
        <NavLink to="/" className="btn btn-outline-primary">
          Inicio
        </NavLink>
        <NavLink to="/personajes" className="btn btn-outline-primary">
          Personajes
        </NavLink>
        <NavLink to="/contacto" className="btn btn-outline-primary">
          Contactos
        </NavLink>
      </div>
    </>
  );
}

export default BarraNavegacion;
