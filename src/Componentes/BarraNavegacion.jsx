import React from "react";
import { NavLink } from "react-router-dom";

function BarraNavegacion() {
  return (
    <>
      <div className="navbar navbar-dark bg-dark">
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
