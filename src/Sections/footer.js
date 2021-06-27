import React from 'react';
import FontAwesome from 'react-fontawesome';
import { HashLink } from 'react-router-hash-link';

export const Footer = () => {
        return (

            // <section id='footer'>
            //     <div classNameName='container'>
            //         <ul>
            //             <li>
            //                 <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/ai_drone/'>
            //                     <FontAwesome name='instagram' />
            //                 </a>
            //             </li>
            //             <li>
            //                 <a target='_blank' rel="noopener noreferrer" href='https://www.youtube.com/channel/UCgkW-fBfXKToCL02RySRo8A?view_as=subscriber'>
            //                     <FontAwesome name='youtube' />
            //                 </a>
            //             </li>
            //             <li>
            //                 <a target='_blank' rel="noopener noreferrer" href='https://soundcloud.com/aidronemusic'><FontAwesome name='soundcloud' /></a>
            //             </li>
            //         </ul>
            //     </div>

            // </section>
                <section id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h2 className="h-custom-headline cs-ta-left h4">About Ai drone</h2>
                                <div className="e156-105 x-text">
                                    <p>Ai drone is a producer based in London, UK. Ai drone has been producing music for the last 10 years in a multitude of styles ranging from rock to hiphop.</p>
                                    <p>Follow on Soundcloud and Youtube for the latest updates and track releases. New content uploaded regularly for content creators and music artists.</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <h4>Get started</h4>
                            <div className="menu-secondary-container"><ul id="menu-secondary" className="menu"><li id="menu-item-210" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-210"><a href="https://aidronebeats.blogspot.com/">Blog</a></li>
                                <li id="menu-item-211" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-9 current_page_item menu-item-211"><a href="/#licensing">Licensing
                                </a></li>
                                    <li id="menu-item-212" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-212"><a href="/">Home</a></li>
                                </ul></div>                </div>
                            <div className="col-md-2 d-none">
                                <h4>Guides</h4>
                                <div className="menu-guides-container"><ul id="menu-guides" className="menu"><li id="menu-item-213" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-213"><a href="https://aidronebeats.com/buying-music-licenses-explained/">Buying music licenses explained</a></li>
                                    <li id="menu-item-214" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-214"><a href="https://aidronebeats.com/how-to-start-a-beat/">How to start a beat</a></li>
                                </ul></div>                </div>
                            <div className="col-md-4">
                                <h4>Download 10 free instrumental beats 👉</h4>
                                <div className="button-2">
                                    <a className='btn btn-primary' href="https://mailchi.mp/1678769da354/aidronesignup" target="_blank">Download Beats</a>
                                </div>
                            </div>
                        </div>
                        <hr />
                        </div>



                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <img width="50" src="https://aidronebeats.com/wp-content/uploads/2019/10/favicon.png" alt="ai drone instrumental beat store logo" />
                    
                                    </div>
                                    <div align="right" className="col-md-4">
                                        <ul>
                                            <li className="social-icon">
                                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ai_drone/">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li className="social-icon">
                                                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCgkW-fBfXKToCL02RySRo8A?view_as=subscriber">
                                                    <i className="fab fa-youtube"></i>
                                                </a>
                                            </li>
                                            <li className="social-icon">
                                                <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/aidronemusic">
                                                    <i className="fab fa-soundcloud"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <br />
                                            <p id="copyright">Ai drone instrumentals | hip hop &amp; pop instrumentals | © Aidronebeats.com 2021</p>
                            </div>
                                    </div>
                                </div>
    </section>
        );
}