import React, { useState } from "react";
import axios from "axios";

const Inscription = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const firstNameError = document.querySelector(".firstName.error");
    const lastNameError = document.querySelector(".lastName.error");

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
          console.log(res);
          firstNameError.innerHTML = res.data.errors.firstName;
          lastNameError.innerHTML = res.data.errors.lastName;
        } else {
          setFormSubmit(true);
          console.log("OK");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {/* FORMULAIRE */}
      <div className="body-container">
        <div className="container">
          {!formSubmit ? (
            <form action="" onSubmit={handleRegister}>
              <p className="">Veuillez remplir le formulaire ci-dessous.</p>
              <input
                type="text"
                name="lastName"
                id="lastName"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                placeholder="NOM"
              />

              <br />
              <input
                type="text"
                name="firstName"
                id="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                placeholder="PRÉNOM"
              />

              <br />
              <input type="submit" value="S'INSCRIRE" />
            </form>
          ) : (
            <form action="" onSubmit={handleRegister}>
              <p className="">Veuillez remplir le formulaire ci-dessous.</p>
              <input
                type="text"
                name="lastName"
                id="lastName"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                placeholder="NOM"
              />

              <br />
              <input
                type="text"
                name="firstName"
                id="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                placeholder="PRÉNOM"
              />

              <br />
              <input type="submit" value="S'INSCRIRE" />
            </form>
          )}

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
