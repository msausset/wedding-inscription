import React, { useState } from "react";
import axios from "axios";

const Inscription = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const firstNameError = document.querySelector(".firstName.error");
    const lastNameError = document.querySelector(".lastName.error");
    const success = document.querySelector(".success");

    let txtSuccess = "";

    // Switch case

    switch (firstName.toLowerCase()) {
      case "romeo":
        if (lastName.toLowerCase() === "vincent") {
          txtSuccess = "Sheeeesh !! Bien vu le colon originel 😃";
        }
        break;
      case "roméo":
        if (lastName.toLowerCase() === "vincent") {
          txtSuccess = "Sheeeesh !! Bien vu le colon originel 😃";
        }
        break;
      case "adrien":
        if (lastName.toLowerCase() === "kulasingham") {
          txtSuccess = "Sheeeesh !! Bien vu le doggo originel 😃";
        }
        break;
      case "viverk":
        if (
          lastName.toLowerCase() === "anthonippillai" ||
          lastName.toLowerCase() === "anthoni"
        ) {
          txtSuccess = "Sheeeesh !! Bientôt ton tour carrément pakatou ! 😃";
        }
        break;
      case "ange":
        if (
          lastName.toLowerCase() === "anthonippillai" ||
          lastName.toLowerCase() === "anthoni"
        ) {
          txtSuccess = "Sheeeesh !! Bientôt ton tour carrément pakatou ! 😃";
        }
        break;
      case "viverkange":
        if (
          lastName.toLowerCase() === "anthonippillai" ||
          lastName.toLowerCase() === "anthoni"
        ) {
          txtSuccess = "Sheeeesh !! Bientôt ton tour carrément pakatou ! 😃";
        }
        break;
      case "tamon":
        if (lastName.toLowerCase() === "kunimoto") {
          txtSuccess = "Sheeeesh !! Bien vu l'aigri originel 😃";
        }
        break;
      case "maxence":
        if (lastName.toLowerCase() === "mwitabangoma") {
          txtSuccess = "Sheeeesh !! C'est carré t'as pas eu la flemme 😃";
        }
        break;
      case "laeticia":
        if (lastName.toLowerCase() === "mathiyas") {
          txtSuccess = "Sheeeesh !! Bien vu madame Anthonippillai 😃";
        }
        break;
      case "laëticia":
        if (lastName.toLowerCase() === "mathiyas") {
          txtSuccess = "Sheeeesh !! Bien vu madame Anthonippillai 😃";
        }
        break;
      default:
        txtSuccess = "Inscription réussie. Merci !";
    }

    // Contrôle et affichage des erreurs

    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/user/register`,
      data: {
        firstName,
        lastName,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          firstNameError.innerHTML = res.data.errors.firstName;
          lastNameError.innerHTML = res.data.errors.lastName;
          success.innerHTML = "";
        } else {
          console.log(res);
          firstNameError.innerHTML = "";
          lastNameError.innerHTML = "";
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
          <form action="" onSubmit={handleRegister}>
            <p className="">Veuillez remplir le formulaire ci-dessous.</p>
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
            <div className="lastName error"></div>
            <br />
            <input type="submit" value="S'INSCRIRE" />
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

export default Inscription;
