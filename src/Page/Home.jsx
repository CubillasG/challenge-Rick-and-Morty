import React from "react";
import { Link } from "react-router-dom";
import imagen from "../assets/imagen.jpg";
import './Home.css'

const Home = () => {
  return (
    <div className="row">
      <div className="col-6">
        <div className="card">
          <img src={imagen} className="card-img-top" alt="..." />
          <div className="card-body"></div>
        </div>
      </div>

      <div className="col-6 claseHome_texto" >
        Descubre el loco munfo de estos personajes!
        <Link to="personajes">
          <button className="btn btn-primary">Personajes</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
