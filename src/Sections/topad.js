import React, { Component } from 'react';
import { Button } from '../components/Button';

export class Topad extends Component {
    render() {
        return (

            <section id='top-ad'>
                <div className='container flex'>
                    <div className='half'>
                        <h1>Get your hands on 5 free instrumental beats</h1>
                        <p>Subscribe and be the first to hear about my new music. As a gift, you’ll reveive 5 free beats via instant download!</p>
                        <Button link='https://mailchi.mp/1678769da354/aidronesignup' text='Get your tracks' target='_blank' />
                    </div>
                    <div className='half'></div>
                </div>

            </section>
        );
    }
}