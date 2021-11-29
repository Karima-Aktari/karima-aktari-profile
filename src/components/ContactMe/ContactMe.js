import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
    return (
        <div id="contact" className="container border my-4 py-4 contact-form">
            <h1>This is contact</h1>
            <form className="row" style={{ margin: "25px 85px 75px 100px" }}>
                <label>Name</label>
                <input type="text" name="name" className="form-control" />

                <label>Email</label>
                <input type="email" name="user-email" className="form-control" />

                <label>Message</label>
                <textarea name="message" rows='5' />
                <input type="submit" value="submit" className="form-control btn btn-warning mt-4 py-2" />
            </form>
        </div>
    );
};

export default ContactMe;