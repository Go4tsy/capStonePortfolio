import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



// link to those components 
// bootstrap nav 

const Navigation = () => {
    return (

            <Navbar className="All-navs">
                <Container>
                    <Nav className="All-navs">

                        <Nav.Link href="/bio">

                            <li className="navs">Bio</li>
                        </Nav.Link>

                        <Nav.Link href="/projects">

                            <li className="navs">Projects</li>
                        </Nav.Link>

                        <Nav.Link href="/resume">

                            <li className="navs">Resume</li>
                        </Nav.Link>

                        <Nav.Link href="/contact">

                            <li className="navs">Contact</li>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    );
};

export default Navigation;