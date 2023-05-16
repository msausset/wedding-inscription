import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

import spinner from "../images/spinner.gif";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const nameError = document.querySelector(".name.error");
    const success = document.querySelector(".success");

    let txtSuccess = "Message envoyé !";

    setIsLoading(true); // Active le spinner

    const RegExpression = /^[a-zA-Z\s]*$/;

    if (name.length < 3) {
      nameError.innerHTML = "Le nom doit faire au moins 3 caractères";
      setIsLoading(false);
      return;
    } else if (!name.match(RegExpression)) {
      nameError.innerHTML = "Le nom doit contenir uniquement des lettres";
      setIsLoading(false);
      return;
    }

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
          nameError.innerHTML = "";
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
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="PRÉNOM / NOM"
            />
            <div className="name error"></div>
            <br />
            <input
              type="email"
              name="user_email"
              id="lastName"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="EMAIL"
            />
            <div className="email error"></div> <br />
            <textarea
              cols="30"
              rows="5"
              name="message"
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="ENTREZ VOTRE MESSAGE ICI ..."
              required
            />
            <div className="message error"></div>
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
