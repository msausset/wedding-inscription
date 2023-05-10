import "./index.css";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Inscription from "./components/Inscription";
import Accueil from "./page/Accueil";
import Nav from "./components/Nav";
import Contact from "./components/Contact";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
