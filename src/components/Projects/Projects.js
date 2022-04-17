import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Project from '../Project/Project';
import './Projects.css'

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    console.log(projects);
    return (
        <div id="projects" className="mx-auto bg-projects py-5">
            <h1>My Projects</h1>
            <div className="container row mx-auto py-3">
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;



// {
//     "id": "5",
//     "img1": "https://i.ibb.co/DwBrDLv/Project4-1.jpg",
//     "img2": "https://i.ibb.co/54Tzhnx/Project4-2.jpg",
//     "img3": "https://i.ibb.co/K2XSkkJ/Project4-3.jpg",
//     "img4": "https://i.ibb.co/syJTr74/Project4-4.jpg",
//     "name": "Honda CBR 300R",
//     "description1": "It's a Fully responsive site.",
//     "description2": "For css framework i have used bootstrap",
//     "description3": "This site shows only UI",
//     "description4": "Here to show product collection i have used bootstrap slider",
//     "description5": "To control responsiveness i apply media@query",
//     "technology": "HTML,CSS,Bootstrap,React js,Font Awesome,Netlify",
//     "live": "https://unruffled-goldwasser-cbr-honda-bootstrap.netlify.app/",
//     "client": "https://github.com/Karima-Aktari/honda-cbr-bootstrap-assignment-3rd",
//     "server": "No Need"
// }