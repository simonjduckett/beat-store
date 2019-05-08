import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';


export class Navbarport extends Component {
    render() {
        return (
            <div>
                <Navbar expand="md" variant='dark' sticky='top'>
                    <Navbar.Brand href="/">Ai drone</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className='link' href="/">Home</Nav.Link>
                            <Nav.Link className='link' href="/blog">
                            blog
                            </Nav.Link>
                            <Nav.Link className='link' href="/about">About</Nav.Link>
                            <Nav.Link className='link' href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}