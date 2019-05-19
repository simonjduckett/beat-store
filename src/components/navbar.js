import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Navbarport extends Component {
    render() {
        return (
            <div>
                <Navbar expand="md" variant='dark' sticky='top'>
                    <Link className='navbar-brand' to={{
                        pathname: '/'
                    }}>Ai drone
                            </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className='nav-link' to={{
                                pathname: '/licensing'
                            }}>Licensing
                            </Link>
                            <Link className='nav-link' to={{
                                    pathname: '/blog'
                                }}>Blog
                            </Link>
                            <Link className='nav-link' to={{
                                    pathname: '/contact'
                                }}>Contact
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}