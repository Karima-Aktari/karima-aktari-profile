import React from 'react';

const MyBlogs = () => {
    return (
        <div className=" container bg-warning text-dark mx-auto my-5 py-4 rounded-3">
            <h1>Blog on React </h1>
            <div className="d-flex justify-content-center flex-column w-100 text-wrap p-4 fs-4">
                <p>
                    <b>1. JSX:</b> JSX stands for JavaScript syntax extension. It is a syntax extension to JavaScript.Using without any createElement() and/or appendChild() methods we can  write HTML elements in JavaScript and place them in the DOM with the help of JSX.
                </p>
                <br />
                <p>
                    <b>2. Component Lifecycle:</b> Each component in React has a lifecycle. The activities in its life cycle are monitoring and manipulating during its three main phases. The three phases are: Mounting, Updating, and Unmounting.
                </p>
            </div>

        </div>
    );
};

export default MyBlogs;