import React, { Component } from 'react';
import { Navbarport } from './navbar';
import { Topad } from '../Sections/topad';

export class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className='container'>
                        <Navbarport />
                        <Topad />
                    </div>
                </header>
            </div>
        );
    }
}