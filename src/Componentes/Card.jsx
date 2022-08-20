import React from "react";
import './Cards.css'

const Card = ({ personajes }) => {
  return (
    <>
      <div className="card tamaño">
        <img src={personajes.image} className="card-img-top " />
        <div className="card-body">
          <p className="card-text">{personajes.name}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
