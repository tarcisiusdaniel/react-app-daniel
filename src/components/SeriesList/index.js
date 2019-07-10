import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const SeriesListItem = ({ series }) => (
        <li>
            <Link to = {`/series/${series.show.id}`}>
                {series.show.name}
            </Link>
        </li>
)

const SeriesList = (props) => {
    return (
        <div>
            Series List component:
            <ul className = "series-list">
                {props.list.map(item =>( 
                    <SeriesListItem series = {item} key = {item.show.id}/>
                ))}
            </ul>
        </div>
    )
}

export default SeriesList;