import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = ({ flag, name, continent, id }) => {
  return (
    <div className="container">
      <div className="cards">
        <div className="card-image">
          <img
            src={flag}
            alt="img not found"
            height={["200px"]}
            width={["200px"]}
          />
        </div>

        <div className="card-text">
          <h3>{name}</h3>
          <p className="cards-continents">{continent}</p>
        </div>

        <div className="card-footer">
          <Link to={`/detail/${id}`}>
            <button>Mas informacion</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
