import React, { Component } from 'react';
import { Button } from '../components/Button';

export class Topad extends Component {
    render() {
        return (

            <section id='top-ad'>
                <div className='container flex'>
                    <div className='half'>
                        <h1>Get your hands on 10 free handcrafted beats</h1>
                        <p>Be the first in line to receive my new music. As a gift, you’ll get 30+ Free Beats instantly delivered in your Messenger inbox!</p>
                        <Button text='Hook me up' />
                    </div>
                    <div className='half'></div>
                </div>

            </section>
        );
    }
}