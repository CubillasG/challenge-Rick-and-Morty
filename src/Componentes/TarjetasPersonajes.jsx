import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { PersonajeUnico } from "../Hoocks/ConsumirApi";

const TarjetasPersonajes = () => {
  let params = useParams();

  const [unico, setUnico] = useState({});

  useEffect(() => {
    PersonajeUnico(setUnico, params.id);
  }, []);

  return (
    <div>
      <h2>Personje : {params.id}</h2>
      <p>Personaje: {unico.name}</p>
    </div>
  );
};

export default TarjetasPersonajes;
