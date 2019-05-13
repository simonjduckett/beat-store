import React from 'react';

export const Button = (props) => {

        return (
            <div id='button'>
                <a target={props.target} href={props.link}>{props.text}</a>
            </div>
        );
}