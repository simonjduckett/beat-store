import React from 'react';
import {BlogEntry} from '../components/blogEntry';

export const Featured = (props) => {
    return (
        <section className='featured-blogs'>
            <div className='container flex'>
                {props.featured.map((blog, i) => {
                    return (
                        <BlogEntry key={i} title={blog.title} content={blog.content} id={blog.id} />
                    )
                })}
            </div>
        </section>
    )
}