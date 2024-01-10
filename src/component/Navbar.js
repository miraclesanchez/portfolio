import React from "react";
// import {useState} from "react"
import {Link} from "react-scroll"
import menu from "../images/menu-logo.png"
import logo from "../images/my-logo.png"
import close from "../images/close.png"

export default function Navbar () {
    return (
        <div className="navbar">
            <img src={logo} alt="my-logo" className="my-logo"/> 
            <nav className="nav">
                <ul className="menu-items">
                    <li><Link to="home" spy={true} smooth={true} offset={-100} duration= {500}>Home</Link></li>
                    <li><Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>Skills</Link></li>
                    <li><Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link></li>
                    <li><Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
                    {/* <img src={close} alt="close-logo" className="close-logo"/> */}
                </ul>
                
            </nav>
            <img src={menu} alt="menu-logo" className="menu-logo"/>
        </div>
    )
}