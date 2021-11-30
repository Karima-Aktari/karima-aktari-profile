import React from 'react';
import './Project.css';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const { id, img1, name, description1 } = project;
    return (
        <div className="col-12 col-md-6 project p-3">
            <img src={img1} className="img-fluid w-75 rounded-3" alt="" />
            <h1>{name}</h1>
            <h3>{description1}</h3>
            <Link to={`/projectDetails/${id}`}><button className="btn btn-warning px-3">Details</button></Link>
        </div>
    );
};

export default Project;