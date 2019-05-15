import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Helmet } from 'react-helmet';

export class Blog extends Component {

    render() {
        return (
            <section id='blog' className='min-height'>
                <Helmet>
                    <title>Ai drone Instrumental beat store | Blog</title>
                    <meta name="description" content="Blog from the Ai drone beat/music store." />
                </Helmet>
                <Hero title='Blog' />
                <div align='left' className='container'>
                    <ul className='blog-list'>
                        {this.props.data.items.map((blog, i) => {

                            let img = blog.content.match(/src([^\s]+)/)
                            let src
                            if(img){
                                let l = img[0].length;
                                src = img[0].slice(5, l - 1);
                            }
                            
                            return (
                                <Link to={{
                                    pathname: 'single/' + blog.id,
                                }}>
                                    <li key={i}>
                                        <div>
                                            <img src={src} alt='aidrone blog' />
                                        </div>
                                        <div>
                                            {blog.title}
                                        </div>
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            </section>
        );
    }
}