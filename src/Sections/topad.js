import React, { Component } from 'react';
import { Button } from '../components/Button';
//import logo from '../images/logo.jpg';

export class Topad extends Component {
    render() {
        return (

            <section id='top-ad'>
                <div className='container flex'>
                    <div className='half'>
                        <h1>Get your hands on 10 free instrumental beats</h1>
                        <p>Subscribe and be the first to hear about my new music. As a gift, you’ll reveive 10 free beats via instant download!</p>
                        <Button link='https://mailchi.mp/1678769da354/aidronesignup' text='Get your tracks' target='_blank' />
                    </div>
                    <div className='half topad-img'>
                    {/* <img src={logo} alt='aidrone logo' /> */}
                    </div>
                </div>
            </section>
        );
    }
}