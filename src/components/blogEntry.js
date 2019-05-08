import React from 'react';
import { Link } from 'react-router-dom';

export const BlogEntry = (props) => {

   let img = props.content.match(/src([^\s]+)/);
   let l = img[0].length;
   let src = img[0].slice(5, l-1);

    return (
        <div className='blogEntry'>
            <img src={src} alt='' />
            <Link to={{
                pathname: 'single/' + props.id,
            }}>
                <p>{props.title}</p>
            </Link>
        </div>
    )
}