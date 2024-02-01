import React from "react";
import "./styles.scss";
import { MdConstruction } from "react-icons/md";

// const projectsData = [
//     {
//         id : 1,
//         name: "Project1",
//         image: ImageProject1
//     },
//     {
//         id : 2,
//         name: "Project2",
//         image: ImageProject2
//     }
// ]
const Projects=()=>{
    return(
        <section id="projects" className="projects">
            <h1>Projects</h1>
            <div className="projects_item"><MdConstruction /> Under construction
            <ul>
                
            </ul>
            </div>
        </section>
    )
}
export default Projects;