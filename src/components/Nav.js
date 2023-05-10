import React, { useState } from "react";
import { Link } from "react-router-dom";
import btn from "../images/menu-btn.png";

const Nav = () => {
  let Links = [
    { name: "INSCRIPTION", link: "/inscription" },
    { name: "CONTACT", link: "/contact" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <a className="logo">
          <Link to="/">I&M</Link>
        </a>
        <div className={open ? "nav-links mobile-menu" : "nav-links"}>
          <ul>
            <li className="active">
              <a>
                <Link to="/" onClick={() => setOpen(!open)}>
                  ACCUEIL
                </Link>
              </a>
            </li>
            {Links.map((link) => (
              <li key={link.name}>
                <a>
                  <Link to={link.link} onClick={() => setOpen(!open)}>
                    {link.name}
                  </Link>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <img
          src={btn}
          onClick={() => setOpen(!open)}
          alt="btn-menu-hamburger"
          className="menu-hamburger"
        />
      </nav>
    </div>
  );
};

export default Nav;
