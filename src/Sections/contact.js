import React from 'react';
import { Hero } from '../components/Hero';

export const Contact = () => {
    return (
        <section className='contact min-height'>
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