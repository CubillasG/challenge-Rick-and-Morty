import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { PersonajeUnico } from "../Hoocks/ConsumirApi";
import './TarjetaPersonaje.css'

const TarjetasPersonajes = () => {
  let params = useParams();

  const [unico, setUnico] = useState({});

  useEffect(() => {
    PersonajeUnico(setUnico, params.id);
  }, []);

  return (
    <div className="class_personajeUnico">
      <h3 className="class_title2">{unico.name}</h3>
      <img className="class_img" src={unico.image} alt='imagen'/>
      <p className="class_species">{unico.species}</p>

    </div>
  );
};

export default TarjetasPersonajes;
