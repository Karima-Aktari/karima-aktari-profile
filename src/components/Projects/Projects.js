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
        <div id="projects" className="mx-auto bg-projects py-3">
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