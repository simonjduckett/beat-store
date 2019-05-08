import React, { Component } from 'react';
import { Topad } from './topad';
import { Player } from './player';
import { Promo } from './promoad';
import { Featured } from './featured';

export class Home extends Component {
    render() {
        return (

            <section>
                <Topad />
                <Promo />
                <Player />
                <Featured featured={this.props.featured} />
            </section>
        );
    }
}