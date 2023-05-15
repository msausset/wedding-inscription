import React, { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [text, setText] = useState("");

  const handleContact = async (e) => {
    e.preventDefault();

    const firstNameError = document.querySelector(".firstName.error");
    const lastNameError = document.querySelector(".lastName.error");
    const textError = document.querySelector(".text.error");
    const success = document.querySelector(".success");

    let txtSuccess = "Message envoyé !";

    // Contrôle et affichage des erreurs

    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/contact/contact`,
      data: {
        firstName,
        lastName,
        text,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          firstNameError.innerHTML = res.data.errors.firstName;
          lastNameError.innerHTML = res.data.errors.lastName;
          textError.innerHTML = res.data.errors.text;
          success.innerHTML = "";
        } else {
          console.log(res);
          firstNameError.innerHTML = "";
          lastNameError.innerHTML = "";
          textError.innerHTML = "";
          success.innerHTML = txtSuccess;
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {/* FORMULAIRE */}
      <div className="body-container">
        <div className="container">
          <form action="" onSubmit={handleContact} className="form-contact">
            <p>
              Veuillez remplir le formulaire ci-dessous. <br />
              Cliquez{" "}
              <Link to="/contact-tel" className="link-contact">
                ici
              </Link>{" "}
              pour nous téléphoner.
            </p>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              placeholder="PRÉNOM"
            />
            <div className="firstName error"></div>
            <br />
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              placeholder="NOM"
            />
            <div className="lastName error"></div> <br />
            <textarea
              cols="30"
              rows="5"
              name="text"
              id="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
              placeholder="ENTREZ VOTRE MESSAGE ICI ..."
            />
            <div className="text error"></div>
            <br />
            <input type="submit" value="ENVOYER" />
            <div className="success"></div>
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
