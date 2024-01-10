import React from "react";
import linkedIn from "../images/linkedin-logo.png"
import github from "../images/github-logo.png"

export default function About (){
    return (
        <div className="about" id="about">
                <div className="about-collums">
                    <div className="contact-info">
                        <h1 id="lets-connect">Let's <span>Connect!</span></h1>
                        <div id="links">  
                            <a href="https://www.linkedin.com/in/miraclesanchez/" target="_blank" rel="noreferrer"><img src={linkedIn} alt=""/></a>
                            <a href="https://github.com/miraclesanchez" target="_blank" rel="noreferrer" ><img src={github} alt=""/></a>
                        </div>
                        <p id="email">Email: miracles1118@gmail.com</p>
                    </div>
                    <div className="bio-text">
                            <h1 className="about-title">About <span>Me</span></h1>
                            <p> Immersed in the dynamic world of web development and data analytics, I find joy in crafting innovative solutions and exploring the endless possibilities of technology.
                            <br/><br/>
                            Beyond the digital realm, I lead an active lifestyle. Whether I'm out for a run or reading a new book, I constantly seek new challenges and sources of inspiration. Currently, I'm honing my endurance to conquer a continuous 5-kilometer run, with my sights set on participating in the exhilarating NYC Marathon in 2025! </p>
                    </div>
                </div>
        </div>
    )
}