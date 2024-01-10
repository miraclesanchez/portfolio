import React from "react";
import resume from "../Miracle-Sanchez-Resume-Web.pdf"

export default function Bio (){
    return(
        <div className="intro" id="home">
            <div className="about-me">
                <h3 className="name-title">Hi, I'm <span>Miracle Sanchez</span>!</h3>
                <h3 className="role">Software Developer</h3>
                <p>Good to see you here!!<br/>I hold a <span>B.A. in Computer Science</span> and <br/>am looking for new opportunities.</p>
                <a href={resume} download="Miracle_Sanchez_Resume.pdf"><button className="resume-button">Download Resume</button></a>
            </div>
        </div>
    )
}