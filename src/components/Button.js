import React from 'react';

export const Button = (props) => {

        return (
            <div id='button'>
                <a href='/'>{props.text}</a>
            </div>
        );
}