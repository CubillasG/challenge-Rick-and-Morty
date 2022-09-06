import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import imagen from "../assets/imagen.jpg";
import ModalInfo from "../Componentes/ModalInfo/ModalInfo";
import "./Home.css";


const Home = () => {
  const [openModal, setOpenModal] = useState(false);
const handleChange= ()=>{
  setOpenModal(true)
}
  return (
    <div className="container class_home">
      <div className="row">
        <div className="col-6">
          <div className="card">
            <img
              src={imagen}
              alt="..."
              onClick={handleChange}
            />
          </div>
          {openModal && <ModalInfo closeModal={setOpenModal} />}
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
