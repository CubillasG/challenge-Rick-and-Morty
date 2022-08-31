import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Componentes/Card";
import { PersonajesAxios } from "../Hoocks/ConsumirApi";
import './Personajes.css'

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    PersonajesAxios(setPersonajes);
  }, []);

  return (
    <div className="class_personajes">
      {personajes.map((item) => (
       
        <Link to={`/personajes/${item.id}`}>
          <Card key={item.id} personajes={item} />
        </Link> 
      ))}
    </div>
  );
};

export default Personajes;
