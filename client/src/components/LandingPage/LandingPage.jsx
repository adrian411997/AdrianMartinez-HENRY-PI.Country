import React from "react";
import world from "../../images/globe.png";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="contenedor">
      <h1 className="text-legend-firstPart">Know your place and then...</h1>
      <div class="png">
        <img src={world} alt="globe_countries" className="globe"></img>
      </div>
      <h1 className="text-legend-secondPart">Know the rest around you</h1>
      <div className="enlace">
        <a href="/home">Ir a Home</a>
      </div>
      <div className="content-svg">
        <svg className="svg" viewBox="0 0 500 150" preserveAspectRatio="none">
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className="path"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default LandingPage;
