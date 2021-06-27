import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export class Navbarport extends Component {
    render() {
        return (
            <div>
                <Navbar expand="md" variant='dark' sticky='top'>
                    <Link className='navbar-brand' to={{
                        pathname: '/'
                    }}>Ai drone
                            </Link>
                    <HashLink smooth className='btn btn-primary order-md-2' to="/#player">Shop Beats
                    </HashLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            {/* <Link className='nav-link' to={{
                                pathname: '/licensing'
                            }}>Licensing
                            </Link> */}
                            <HashLink smooth className='nav-link' to="/#licensing">Licensing
                            </HashLink>
                            {/* <Link className='nav-link' to={{
                                    pathname: '/blog'
                                }}>Blog
                            </Link> */}
                            <Link className='nav-link' to={{
                                    pathname: '/contact'
                                }}>Contact Us
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                    
                </Navbar>
            </div>
        );
    }
}