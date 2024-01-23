import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import menu from "../images/menu-logo.png";
import logo from "../images/my-logo.png";
// import close from "../images/close.png";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = (link) => {
    setActiveLink(link);

  };
  return (
    <div className="navbar">
      <img src={logo} alt="my-logo" className="my-logo" />
      <nav className="nav">
        <ul className="menu-items">
          <li className={activeLink === "home" ? "active-link" : ""}>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => handleClick("home")}
            >
              Home
            </Link>
          </li>
          <li className={activeLink === "skills" ? "active-link" : ""}>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => handleClick("skills")}
            >
              Skills
            </Link>
          </li>
          <li className={activeLink === "projects" ? "active-link" : ""}>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => handleClick("projects")}
            >
              Projects
            </Link>
          </li>
          <li className={activeLink === "about" ? "active-link" : ""}>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => handleClick("about")}
            >
              About
            </Link>
          </li>
          {/* <img src={close} alt="close-logo" className="close-logo"/> */}
        </ul>
      </nav>
      <img src={menu} alt="menu-logo" className="menu-logo" />
    </div>
  );
}
