import React, { Component } from 'react';
import { Topad } from './topad';
import { Player } from './player';
import { Promo } from './promoad';
import { Featured } from './featured';
import Licenses from './Licenses.js';
import Faqs from './Faqs';

export class Home extends Component {
    render() {
        return (
            <section>
                {/* <Promo /> */}
                <Player />
                {/* <Featured featured={this.props.featured} /> */}
                <Faqs />
                <Licenses />
            </section>
        );
    }
}