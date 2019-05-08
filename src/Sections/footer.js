import React from 'react';
import FontAwesome from 'react-fontawesome';

export const Footer = () => {
        return (

            <section id='footer'>
                <div className='container'>
                    <ul>
                        <li>
                            <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/ai_drone/'>
                                <FontAwesome name='instagram' />
                            </a>
                        </li>
                        <li>
                            <a target='_blank' rel="noopener noreferrer" href='https://www.youtube.com/channel/UCgkW-fBfXKToCL02RySRo8A?view_as=subscriber'>
                                <FontAwesome name='youtube' />
                            </a>
                        </li>
                        <li>
                            <a target='_blank' rel="noopener noreferrer" href='https://soundcloud.com/aidronemusic'><FontAwesome name='soundcloud' /></a>
                        </li>
                    </ul>
                </div>

            </section>
        );
}