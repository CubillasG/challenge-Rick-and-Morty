import React, { useState } from "react";
import iconoClose from "../../assets/close.png";
import "./ModalInfo.css";

const ModalInfo = ({ closeModal }) => {
  return (
    <div className="class_modal">
      <img
        src={iconoClose}
        alt="icono cerrar"
        className="class_closed"
        onClick={() => closeModal(false)}
      />

      <h2 className="class_title_info">Rick and Mortyyyy!</h2>
    </div>
  );
};

export default ModalInfo;
