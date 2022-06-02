import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">KARIMA'S PORTFOLIO</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#projects">Projects</Nav.Link>
                        {/* <Nav.Link as={HashLink} to="/home#skill">Skills</Nav.Link> */}
                        <Nav.Link as={HashLink} to="/home#contact">Contact Me</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">My Blogs</Nav.Link>

                        {/* {
                            user.email ?
                                <Button onClick={logOut} variant="light">Logout</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user.displayName}</a>
                        </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;