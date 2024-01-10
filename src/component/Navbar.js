import React from "react";
import {Link} from "react-scroll"
import menu from "../images/menu-logo.png"
import logo from "../images/my-logo.png"

export default function Navbar () {
    return (
        <div className="navbar">
            <img src={logo} alt="my-logo" className="my-logo"/> 
            <nav className="nav">
                <ul>
                    <li><Link to="home" spy={true} smooth={true} offset={-200} duration= {500}>Home</Link></li>
                    <li><Link to="skills" spy={true} smooth={true} offset={-200} duration={500}>Skills</Link></li>
                    <li><Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link></li>
                    <li><Link to="about" spy={true} smooth={true} offset={-200} duration={500}>About</Link></li>
                </ul>
                <img src={menu} alt="menu-logo" className="menu-logo"/>
            </nav>
            
        </div>
    )
}