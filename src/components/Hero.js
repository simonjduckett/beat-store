import React from 'react';

export const Hero = (props) => {
    return (
        <section className='hero'>
            <div className='container'>
                <h1>{props.title}</h1>
            </div>
        </section>
    );
}