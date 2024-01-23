import React from "react";
import Navbar from "./component/Navbar";
import Bio from "./component/Intro";
import Skills from "./component/Skills";
import Footer from "./component/Footers";
import Projects from "./component/Projects";
import About from "./component/About";
import data from "./data";

export default function app(){
  const projects = data.map(project => {
    return(
      <Projects
        key={project}
        project={project}
        title={"Projects"}
      />
    )
  })

  return (
    <div>
      <Navbar/>
      <Bio/>
      <Skills/>
      <h1 className="projects-title">
        Projects
      </h1>
      <section id="project-section"> 
        {projects}
      </section>
      <About/>
      <Footer/>
    </div>
  );
}


