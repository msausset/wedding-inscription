import React from "react";

const ContactTelephone = () => {
  return (
    <div>
      <div className="body-container">
        <div className="container">
          <div className="div-tel">
            <p className="p-titre">Contacter Inès</p>
            <p>
              <a href="tel:+33768636809" className="link-contact-tel">
                07 68 63 68 09
              </a>
              <br />
              <a
                href="mailto:tedjaniines@gmail.com"
                className="link-contact-tel"
              >
                tedjaniines@gmail.com
              </a>
            </p>
            <p className="p-titre">Contacter Maxime</p>
            <p>
              <a href="tel:+33652161599" className="link-contact-tel">
                06 52 16 15 99
              </a>
              <br />
              <a
                href="mailto:maxime.sausset@hotmail.fr"
                className="link-contact-tel"
              >
                maxime.sausset@hotmail.fr
              </a>
            </p>
          </div>

          {/* OMBRES */}

          <div className="drop drop-1"></div>
          <div className="drop drop-2-tel"></div>
          <div className="drop drop-3"></div>
          <div className="drop drop-4"></div>
          <div className="drop drop-5"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactTelephone;
