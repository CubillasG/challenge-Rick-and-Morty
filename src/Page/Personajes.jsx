import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Card from "../Componentes/Card";
import { PersonajesAxios } from "../Hoocks/ConsumirApi";

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    PersonajesAxios(setPersonajes);
  }, []);

  return (
    <div>
      {personajes.map((item) => (
        console.log(item),
        <NavLink to={`/personajes/${item.id}`}>
          <Card key={item.id} personajes={item} />
        </NavLink>
      ))}
    </div>
  );
};

export default Personajes;
