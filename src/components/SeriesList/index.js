import React, { Component } from 'react';
import './index.css';

const SeriesListItem = ({ series }) => (
        <li key={series}>
            {series}
        </li>
)

const SeriesList = (props) => {
    return (
        <div>
            Series List component:
            <ul className = "series-list">
                {props.list.map(item =>( 
                    <SeriesListItem series = {item} />
                ))}
            </ul>
        </div>
    )
}

export default SeriesList;