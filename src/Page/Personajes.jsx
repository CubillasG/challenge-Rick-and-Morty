import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Card from "../Componentes/Card";
import { PersonajesAxios } from "../Hoocks/ConsumirApi";
import "./Personajes.css";

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [buscador, setBuscador] = useSearchParams();

  useEffect(() => {
    PersonajesAxios(setPersonajes);
  }, []);

  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setBuscador({ filter });
    } else {
      setBuscador({});
    }
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Ingrese un personaje"
          className="form-control mb-2"
          onChange={handleChange}
          value={buscador.get("filter") || ""}
        ></input>
      </div>
      <div className="class_personajes">
        {personajes
          .filter((item) => {
            console.log(item);
            let filter = buscador.get("filter");
            if (!filter) return true;
            let title = item.name.toLowerCase();
            return title.startsWith(filter.toLowerCase());
          })
          .map((item) => (
            <Link to={`/personajes/${item.id}`}>
              <Card key={item.id} personajes={item} />
            </Link>
          ))}
      </div>
    </>
  );
};

export default Personajes;
