import React from 'react';
import { useState } from 'react';
//react-boostrap import
import { Container, Navbar, Nav } from 'react-bootstrap';
import d from '../Assets/image/logo Dk.jpg'


function Header() {
    const [activeLink, setActiveLink] = useState('home');
    return (
        <Navbar expand="lg" data-bs-theme="light" className="fixed-top " style={{ backgroundColor: ' #264653' }}>
            <Container>
                <Navbar.Brand href="/" style={{ fontSize: 20, color: 'white' }} className="me-auto"><img src={d} style={{ height: '48px' }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="/home"
                            className={`me-3 text-white ${activeLink === 'home' ? 'active' : ''}`}
                            onClick={() => setActiveLink('home')}
                        >Home</Nav.Link>
                        <Nav.Link
                            href="#About"
                            className={`me-3 text-white ${activeLink === 'about' ? 'active' : ''}`}
                            onClick={() => setActiveLink('about')}
                        >About me</Nav.Link>
                        <Nav.Link
                            href="#Services"
                            className={`me-3 text-white ${activeLink === 'Services' ? 'active' : ''}`}
                            onClick={() => setActiveLink('Services')}
                        >Services</Nav.Link>
                        <Nav.Link
                            href="#Projects"
                            className={`me-3 text-white ${activeLink === 'Projects' ? 'active' : ''}`}
                            onClick={() => setActiveLink('Projects')}
                        >Projects</Nav.Link>
                        <Nav.Link
                            href="#Contacts"
                            className={`me-3 text-white ${activeLink === 'Contacts' ? 'active' : ''}`}
                            onClick={() => setActiveLink('Contacts')}
                        >Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
export default Header