import React from "react";
import bgdesktop from "../images/bg-img.png";
import bgtablet from "../images/bg-img-tablet.png";
import bgmobile from "../images/bg-img-mobile.png";

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
      <div className="divImgTablet">
        <img
          src={bgtablet}
          alt="Save-The-Date-Ines-Maxime"
          className="img-home-tablet"
        />
      </div>
      <div className="divImgMobile">
        <img
          src={bgmobile}
          alt="Save-The-Date-Ines-Maxime"
          className="img-home-mobile"
        />
      </div>
    </div>
  );
};

export default Accueil;
