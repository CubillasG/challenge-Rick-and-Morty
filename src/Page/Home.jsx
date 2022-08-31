import React from "react";
import { Link } from "react-router-dom";
import imagen from "../assets/imagen.jpg";
import "./Home.css";
import ModalInfo from "./ModalInfo/ModalInfo";


const Home = () => {
  return (
    <div className="container class_home">
      <div className="row">
        <div className="col-6">
          <div className="card">
            <img src={imagen} alt="..." />
          </div>
          <ModalInfo/>
        </div>

        <div className="col-6 claseHome_texto">
          <h2>Descubre el loco munfo de estos personajes!</h2>
          <Link to="personajes">
            <button className="btn btn-light">Personajes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
