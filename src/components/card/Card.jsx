import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
export default function Card(props) {
  const { name, species, gender, image, onClose, arro } = props;

  const handleCloseClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="containerdela">
      <div className="container-carta">
        <div className="imagen">
          <img src={image} alt={name} />
        </div>
        <div className="containerletras">
          <div className="letras2">
            <div className="arroz">
              <Link  to={`/detail/${arro}`}>
                <h2  className="card-title">{name}</h2>
              </Link>
              
            </div>
            <div className="arroz2">
              <span>tipe of specie:</span>
              <p>{species}</p>
            </div>
            <div className="arroz3">
              <span>gender:</span>
              <p>{gender}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="boton">
        <button className="buton" onClick={handleCloseClick}>
          X
        </button>
      </div>
    </div>
  );
}
