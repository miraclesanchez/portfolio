import React from "react";
import html from "../images/html-logo.png"
import css from "../images/css-logo.png"
import javascript from "../images/javascript-logo.png"
import mysql from "../images/my-sql-logo.png"
import java from "../images/java-logo.png"
import git from "../images/git-logo.png"
import jira from "../images/jira-logo.png"

//USE PROPS HERE AS WELL

export default function Skills () {
    return (
        <div className="skills" id="skills">
            <div className="skills-title">
                <h1>Skills</h1>
            </div>
            <div className="seperate-tech">
                <div className="front-end">
                    <h2 className="front-end-title"><span>Front-End</span> Technologies</h2>
                    <ul className="front-end-list">
                        <li>
                            <img src={html} alt="html-logo"/>
                            <p>HTML</p>
                        </li>
                        <li>
                            <img src={css} alt="css-logo"/>
                            <p>CSS</p>
                        </li>
                        <li>
                            <img src={javascript} alt="html-logo"/>
                            <p>JavaScript</p>
                        </li>
                    </ul>
                </div>
                <div className="back-end">
                    <h2 className="back-end-title"><span>Back-End</span> Technologies</h2>
                    <ul className="back-end-list">
                        <li>
                            <img src={mysql} alt="css-logo"/>
                            <p>MySQL</p>
                        </li>
                        <li>
                            <img src={java} alt="html-logo"/>
                            <p>Java</p>
                        </li>
                    </ul>
                </div>
                <div className="tools">
                    <h2 className="tools-title"><span>Tools</span></h2>
                    <ul className="tools-list">
                        <li>
                            <img src={git} alt="css-logo"/>
                            <p>Git</p>
                        </li>
                        <li>
                            <img src={jira} alt="html-logo"/>
                            <p>Jira</p>
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
    )
}