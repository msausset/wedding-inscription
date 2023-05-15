import React from "react";
import bgdesktop from "../images/bg-home.png";

const Accueil = () => {
  return (
    <div className="body-home">
      <div className="divImg">
        <img
          src={bgdesktop}
          alt="Save-The-Date-Ines-Maxime"
          className="img-home"
        />
      </div>
    </div>
  );
};

export default Accueil;
