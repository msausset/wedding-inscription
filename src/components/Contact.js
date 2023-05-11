import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      {/* FORMULAIRE */}
      <div className="body-container">
        <div className="container">
          <form action="" className="form-contact">
            <p>
              Veuillez remplir le formulaire ci-dessous. <br />
              Cliquez{" "}
              <Link to="/contact-tel" className="link-contact">
                ici
              </Link>{" "}
              pour nous téléphoner.
            </p>
            <input type="text" placeholder="NOM" />
            <br />
            <input type="text" placeholder="PRÉNOM" />
            <br />
            <textarea
              cols="30"
              rows="5"
              placeholder="ENTREZ VOTRE MESSAGE ICI ..."
            />
            <br />
            <input type="button" value="ENVOYER" />
          </form>

          {/* OMBRES */}

          <div className="drop drop-1"></div>
          <div className="drop drop-2"></div>
          <div className="drop drop-3"></div>
          <div className="drop drop-4"></div>
          <div className="drop drop-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
