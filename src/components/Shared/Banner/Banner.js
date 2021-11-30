import React from 'react';
import img from '../../../Images/Karima-profile.jpg';
import './Banner.css';
import { Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="row mx-auto banner-bg">
            <div className="col-12 col-md-6 p-4">
                <img src={img} className="w-100 img-fluid rounded-pill p-4" alt="" />
            </div>
            <div className="col-12 col-md-6 my-5 py-5">
                <div className="text-light">
                    <h2>Hi! I Am</h2>
                    <h1>KARIMA AKTARI</h1>
                    <h3>A Junior MERN Stack</h3>
                    <h3>Developer</h3>
                    <a rel="noopener noreferrer"
                        target="_blank" href="https://drive.google.com/file/d/1EOkspP1aQXGBMWBcVLCMCLLYi7SLVeR9/view?usp=sharing">
                        <Button className="mt-3 px-3 banner-btn" variant="info">My Resume</Button></a>
                </div>
                <div className="pt-4">
                    <a rel="noopener noreferrer"
                        target="_blank" href="https://www.linkedin.com/in/karima-aktari-1b9545226/ "><i className="fab fa-linkedin text-primary fs-3 p-1"></i></a>
                    <a rel="noopener noreferrer"
                        target="_blank" href="https://github.com/Karima-Aktari"><i className="fab fa-github-square text-warning fs-3 p-1"></i></a>
                    <a rel="noopener noreferrer"
                        target="_blank" href="https://www.facebook.com/karima.haque911/"><i className="fab fa-facebook-square text-primary fs-3 p-1"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;