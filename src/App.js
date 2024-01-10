import React from "react";
import Navbar from "./component/Navbar";
import Bio from "./component/Intro";
import Skills from "./component/Skills";
import Footer from "./component/Footers";
import Projects from "./component/Projects";
import About from "./component/About";

export default function app(){
  return (
    <div>
      <Navbar/>
      <Bio/>
      <Skills/>
      <Projects/>
      <About/>
      <Footer/>
    </div>
  );
}


