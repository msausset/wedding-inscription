import React from "react";
/* import axios from 'axios' */

const Inscription = () => {
  /*   const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");

const handleClick = async (e) => {
  e.preventDefault();

  console.log(prenom, nom);

  var bodyFormData = new FormData();

  bodyFormData.append("firstname", prenom);
  bodyFormData.append("lastname", nom);

  axios
    .post("http://127.0.0.1:3333/registered-users", bodyFormData)
    .then((response) => {
      alert("inscription validé !");

      //redirect user to home page
      const timer = setTimeout(() => {
        window.location.href = "/connexion";
      }, 1000); 
    })
    .catch((err) => {
      console.log(err);
      alert("erreur d'inscription");
    });
  } */

  return (
    <div>
      {/* FORMULAIRE */}

      <div className="container">
        <form action="">
          <p className="">Veuillez remplir le formulaire ci-dessous.</p>
          <input type="text" placeholder="NOM" />
          <br />
          <input type="email" placeholder="EMAIL" />
          <br />
          <input type="button" value="S'INSCRIRE" />
        </form>

        {/* OMBRES */}

        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
        <div className="drop drop-4"></div>
        <div className="drop drop-5"></div>
      </div>
    </div>
  );
};

export default Inscription;
