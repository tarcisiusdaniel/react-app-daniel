import React, { Component } from 'react';
import './index.css';

const SeriesList = (props) => {
    return (
        <div>
            Series List component:
            <ul className = "series-list">
                {props.list.map(item =>( 
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default SeriesList;