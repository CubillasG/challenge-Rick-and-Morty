import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
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
       
        <Link to={`/personajes/${item.id}`}>
          <Card key={item.id} personajes={item} />
        </Link>
      ))}
    </div>
  );
};

export default Personajes;
