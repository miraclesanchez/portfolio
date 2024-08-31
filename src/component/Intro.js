import React from "react";
import resume from "../Miracle-Sanchez-Resume-Web.pdf"

export default function Bio (){
    return(
        <div className="intro" id="home">
            <div className="intro">
                <h3 className="name-title">Hi, I'm <span>Miracle Sanchez</span>!</h3>
                <h3 className="role">Software Developer</h3>
                <p>Good to see you here!!<br/>I hold a <span>B.S. in Computer Science</span> and am currently pursuing a <span>M.S. in Computer Science</span><br/></p>
                <a href={resume} download="Miracle_Sanchez_Resume.pdf"><button className="resume-button">Download Resume</button></a>
            </div>
        </div>
    )
}