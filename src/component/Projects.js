import React from "react";

export default function Projects(props){
    return (
        <div className="projects" id="projects">
            <div className="project-cards">
                    <img className="project-img" src={props.project.img} alt="projects_images"/>
                    <div className="tech-tags">
                        <p>{props.project.techTag1}</p>
                        <p>{props.project.techTag2}</p>
                        <p>{props.project.techTag3}</p>
                        {props.project.techTag4 && <p>{props.project.techTag4}</p>}
                    </div>
                    <p className="description">{props.project.description}<br/><hr></hr> Note: {props.project.note}</p>

                    <a href={props.project.projectLink}target="_blank" rel="noreferrer"><button className="buttons">Live Site</button></a>

                    <a href={props.project.sourceCodeLink} target="_blank" rel="noreferrer"><button className="buttons">Source Code</button></a>
            </div>
        </div>
    )
}