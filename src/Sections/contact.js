import React from 'react';
import { Hero } from '../components/Hero';
import { Helmet } from 'react-helmet';

export const Contact = () => {
    return (
        <section className='contact min-height'>
            <Helmet>
                <title>Ai drone Instrumental beat store | Contact</title>
                <meta name="description" content="Contact the Ai drone beat/music store." />
            </Helmet>
            <Hero title='Contact' />
            <div className='container'>
                <div>
                    <div>
                        <p>If you would like to contact me feel free to drop me a message at the email below.</p>
                        <p><a href='mailto:aidronemusic@gmail.com'>aidronemusic@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}