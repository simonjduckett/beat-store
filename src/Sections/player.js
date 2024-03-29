import React, { Component } from 'react';
import Iframe from 'react-iframe'

export class Player extends Component {
    render() {
        return (
            <section id='player'>
                <div className='container'>
                    <h1>Instant Beat store</h1>
                    <p>GET INSTANT ACCESS</p>
                    <Iframe
                        url="https://player.beatstars.com/?storeId=99025" scrolling="no" width="100%"
                        height="800" style="max-width:1024px;" frameborder="0" marginheight="0" marginwidth="0"
                    />
                </div>
            </section>
        );
    }
}