import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

import spinner from "../images/spinner.gif";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const success = document.querySelector(".success");

    let txtSuccess = "Message envoyé !";

    setIsLoading(true); // Active le spinner

    await emailjs
      .sendForm(
        "service_d7xiir2",
        "template_qrpdkc3",
        form.current,
        "V4IVRnDBEPyCoOtgQ"
      )
      .then(
        (result) => {
          console.log(result);
          success.innerHTML = txtSuccess;
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      {/* FORMULAIRE */}
      <div className="body-container">
        <div className="container">
          <form
            action=""
            ref={form}
            onSubmit={sendEmail}
            className="form-contact"
          >
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
              name="user_name"
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              placeholder="PRÉNOM / NOM"
            />
            <div className="firstName error"></div>
            <br />
            <input
              type="email"
              name="user_email"
              id="lastName"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              placeholder="EMAIL"
            />
            <div className="lastName error"></div> <br />
            <textarea
              cols="30"
              rows="5"
              name="message"
              id="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
              placeholder="ENTREZ VOTRE MESSAGE ICI ..."
            />
            <div className="text error"></div>
            <br />
            <input type="submit" value="ENVOYER" />
            {/* Affichage du spinner */}
            {isLoading && (
              <div className="spinner">
                <img src={spinner} alt="spinner" className="spinner-img" />
              </div>
            )}
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
