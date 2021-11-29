import React from 'react';
import './Project.css';

const Project = ({ project }) => {
    console.log(project);
    const { img, name, type } = project;
    return (
        <div className="col-12 col-md-6 project p-3">
            <img src={img} className="img-fluid w-75 rounded-3" alt="" />
            <h1>{name}</h1>
            <h3>{type}</h3>
        </div>
    );
};

export default Project;