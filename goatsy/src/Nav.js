import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



// link to those components 
// bootstrap nav 

const Navigation = () => {
    return (
            <Navbar className="All-navs" expand="lg">
                <Container  className="navs" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="All-navs">

                        <Nav.Link href="/bio"  className="navs">

                            Bio
                        </Nav.Link>

                        <Nav.Link href="/projects"   className="navs">

                           Projects
                        </Nav.Link>

                        <Nav.Link href="/resume"  className="navs">

                            Resume
                        </Nav.Link>

                        <Nav.Link href="/contact"  className="navs">

                           Contact
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Navigation;