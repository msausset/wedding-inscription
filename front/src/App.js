import "./index.css";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Inscription from "./components/Inscription";
import Accueil from "./page/Accueil";
import Plan from "./components/Plan";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import ContactTelephone from "./components/ContactTelephone";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/">
            <Route index element={<Accueil />} />
            <Route path="inscription" element={<Inscription />} />
            <Route path="contact" element={<Contact />} />
            <Route path="contact-tel" element={<ContactTelephone />} />
            <Route path="plan" element={<Plan />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
