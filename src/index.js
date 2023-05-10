import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // ------------------------------- SUPRESSION DU <REACT.STRICTMODE> AUTOUR DU <APP /> POUR NE PAS AFFICHER 2 FOIS LES ALERTES PAR EXEMPLE
  <App />
);
