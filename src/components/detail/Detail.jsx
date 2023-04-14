import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import "../detail/detail.css";
import { Link } from "react-router-dom";

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div>
      <div className="holi">
        <div className="homesa">
          <Link to="/home">
            <span className="homes">Back to Home</span>
          </Link>
          <Outlet />
        </div>

        <div className="prueba"></div>
        <div className="container1">
          <img className="imagen1" src={character.image} alt={character.name} />
          <div className="arrozconleche">
            <h2>{character.name}</h2>
          </div>

          <div className="containercartass">
            <div className="arroestaus">
              <a href="arro">Status:</a> <p>{character.status}</p>
            </div>
            <div className="arrodecamaron">
              <a href="arro">Species: </a>
              <p>{character.species}</p>
            </div>
            <div className="arroequeso">
              <a href="arro">Gender:</a> <p>{character.gender}</p>
            </div>
            <div className="arrodeyuca">
              <a href="arro">Origin: </a> <p>{character.origin?.name}</p>
            </div>
            <div className="arroepollo">
              <a href="arro">Last Known Location: </a>{" "}
              <p>{character.location?.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
