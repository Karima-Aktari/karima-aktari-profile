import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ProjectsDetails = () => {
    const { projectId } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])
    console.log(details);
    const exactDetail = details?.filter(detail => detail.id === projectId)
    console.log(exactDetail);
    return (
        <div className="bg-dark text-light py-4">
            <h2> {projectId}</h2>
            <h1>Project Details</h1>

            <div className="row mx-auto row-cols-1 row-cols-md-3 g-4 py-4">
                <div className="col project">
                    <div className="card h-100">
                        <img src={exactDetail[0]?.img2} className="card-img-top bg-dark" alt="" />
                    </div>
                </div>
                <div className="col project">
                    <div className="card h-100">
                        <img src={exactDetail[0]?.img3} className="card-img-top bg-dark" alt="" />
                    </div>
                </div>
                <div className="col project">
                    <div className="card h-100">
                        <img src={exactDetail[0]?.img4} className="card-img-top bg-dark" alt="" />
                    </div>
                </div>

            </div>

            <div>
                <h2>Project: {exactDetail[0]?.name}</h2>
                <h4>Featured:</h4>
                <p><i className="fas fa-arrows-alt"></i> {exactDetail[0]?.description1}</p>
                <p><i className="fas fa-arrows-alt"></i> {exactDetail[0]?.description2}</p>
                <p><i className="fas fa-arrows-alt"></i> {exactDetail[0]?.description3}</p>
                <p><i className="fas fa-arrows-alt"></i> {exactDetail[0]?.description4}</p>
                <p><i className="fas fa-arrows-alt"></i> {exactDetail[0]?.description5}</p>
                <h4>Technology:-</h4>
                <p>{exactDetail[0]?.technology}</p>
                <a rel="noopener noreferrer"
                    target="_blank" href={exactDetail[0]?.live}>
                    <Button className="mt-3 px-3" variant="info">Live-Site</Button></a>
                <a rel="noopener noreferrer"
                    target="_blank" href={exactDetail[0]?.client}>
                    <Button className="mt-3 px-3 mx-3" variant="info">Client-Side-Code</Button></a>
                <a rel="noopener noreferrer"
                    target="_blank" href={exactDetail[0]?.server}>
                    <Button className="mt-3 px-3" variant="info">Server-Side-Code</Button></a>
            </div>
        </div>
    );
};

export default ProjectsDetails;