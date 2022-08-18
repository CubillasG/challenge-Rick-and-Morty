import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { PersonajeUnico } from "../Hoocks/ConsumirApi";

const TarjetasPersonajes = () => {
  let params = useParams();

  const [unico, setUnico] = useState({});

  useEffect(() => {
    PersonajeUnico(params, setUnico);
  }, []);

  return (
    <div>
      <h2>Personaje: {params.id} - {params.name}</h2>
      <p>
        {unico.id}-{unico.name}
      </p>
    </div>
  );
};

export default TarjetasPersonajes;
