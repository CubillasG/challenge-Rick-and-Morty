import React from "react";
import axios from "axios";

//Implementacion de axios.

const PersonajesAxios = async (state) => {
  const respuesta = await axios.get(
    "https://rickandmortyapi.com/api/character"
  );
  state(respuesta.data.results);
};

const PersonajeUnico = async (state, id) => {
  const res = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  state(res.data);
};

export { PersonajesAxios, PersonajeUnico };
