import React from 'react';
import FontAwesome from 'react-fontawesome';

export const License = (props) => {

        return (
            <div className='licenses'>
                <h1>{props.data.name}</h1>
                <h2><sup>$</sup>{props.data.price}</h2>
                <table className='licenses-table'>
                    {props.data.included.map((point, i) => {
                        return (
                            <tr key={i}>
                                <td className='included'><FontAwesome name='check-circle' /></td>
                                <td className='included-point'>{point}</td>
                            </tr>
                        )
                    })}
                    {props.data.excluded.map((point, i) => {
                        return (
                            <tr key={i}>
                                <td className='excluded'><FontAwesome name='times-circle' /></td>
                                <td className='excluded-point'>{point}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        );
}