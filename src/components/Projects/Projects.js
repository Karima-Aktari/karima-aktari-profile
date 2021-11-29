import React from 'react';
import project1 from '../../Images/project-1.png';
import Project from '../Project/Project';
import './Projects.css'

const Projects = () => {
    const projects = [
        {
            id: 1,
            img: project1,
            name: 'CARHOUSE',
            type: 'Full Stack'
        },
        {
            id: 2,
            img: project1,
            name: 'CARHOUSE',
            type: 'Full Stack'
        },
        {
            id: 3,
            img: project1,
            name: 'CARHOUSE',
            type: 'Full Stack'
        },
        {
            id: 4,
            img: project1,
            name: 'CARHOUSE',
            type: 'Full Stack'
        },

    ]

    return (
        <div id="projects" className="bg-projects py-3">
            <h1>My Projects</h1>
            <div className="row mx-auto py-3">
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