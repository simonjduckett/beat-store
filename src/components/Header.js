import React, { Component } from 'react';
import { Navbarport } from './navbar';

export class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className='container'>
                        <Navbarport />
                    </div>

                </header>
            </div>
        );
    }
}