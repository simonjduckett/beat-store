import React, { Component } from 'react';
import { License } from '../components/license';
import licenses from '../licenses.json';
import { Hero } from '../components/Hero';

export class Licensing extends Component {
    render() {
        return (

            <section id='licensing'>
                <Hero title='Licensing' />
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <License data={licenses.licenses[0]} />
                        </div>
                        <div className='col'>
                            <License data={licenses.licenses[1]} />
                        </div>
                        <div className='col'>
                            <License data={licenses.licenses[2]} />
                        </div>
                        <div className='col'>
                            <License data={licenses.licenses[3]} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}