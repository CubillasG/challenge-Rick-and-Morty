import React, { useState } from "react";
import iconoClose from "../../assets/close.png";
import './ModalInfo.css'

const ModalInfo = () => {
    
    const[isClose, setIsClose] = useState(false)
    const handleClose = ()=>{
        setIsClose(true)
    }
    
  return (
    <div className="class_modal">
      <img 
      src={iconoClose} 
      alt="icono cerrar" 
      className="class_closed" 
      onClick={handleClose}
      />
        <h2>Gracias por la mano que le das a la comunidad!</h2>
      <p>Quiero formar parte de tu team!!!!</p>
    </div>
  );
};

export default ModalInfo;
