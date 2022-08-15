import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { PersonajesAxios } from "../Hoocks/ConsumirApi";

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    PersonajesAxios(setPersonajes);
  }, []);

  return (
    <>
     
        {personajes.map((item) => (
          <NavLink to={`/personajes/${item.id}`}>
            {item.id} - {item.name}
          </NavLink>
        ))}
    
    </>
  );
};

export default Personajes;
