import React, { Component } from 'react';
import { License } from '../components/license';
import licenses from '../licenses.json';
import { Hero } from '../components/Hero';
import { Button } from '../components/Button';
import { Helmet } from 'react-helmet';

export class Licensing extends Component {
    render() {
        return (

            <section id='licensing' className='min-height'>
                <Helmet>
                    <title>Ai drone Instrumental beat store | Music licensing options</title>
                    <meta name="description" content="Licensing options from the Ai drone beat/music store." />
                </Helmet>
                <Hero title='Licensing' />
                <div className='container'>
                    <div className='py-5'><h2>Options</h2></div>
                    <div className='row'>
                        <div className='col-sm'>
                            <License data={licenses.licenses[0]} />
                            <Button text='View full license' target='_blank' link='https://drive.google.com/file/d/1c18r21jhM_YH38SuQ8QoPnN7j4Dwrl6J/view?usp=sharing' />
                        </div>
                        <div className='col-sm'>
                            <License data={licenses.licenses[1]} />
                            <Button text='View full license' target='_blank' link='https://drive.google.com/file/d/1UECd8Nypcvtj1qbF_E6cFoYkvyiTWUea/view?usp=sharing' />
                        </div>
                        <div className='col-sm'>
                            <License data={licenses.licenses[2]} />
                            <Button text='View full license' target='_blank' link='https://drive.google.com/file/d/1MfniLpEuchdsCI0ue8CNS0nVi4n8yLM0/view?usp=sharing' />
                        </div>
                        <div className='col-sm'>
                            <License data={licenses.licenses[3]} />
                            <Button text='View full license' target='_blank' link='https://drive.google.com/file/d/1j4f44zcXmpuPhEp7dka4DEKuO1YU4OCh/view?usp=sharing' />
                        </div>
                    </div>
                    <div className='py-5 text-muted'>
                        <h4>Upon purchase beats will be available to download instantly.</h4>
                    </div>
                </div>
            </section>
        );
    }
}