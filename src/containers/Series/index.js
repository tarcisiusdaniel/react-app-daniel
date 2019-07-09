import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import 'whatwg-fetch';

class Series extends Component {
    constructor(props){
        super(props);
        this.state = {
            series: ["Vikings", "Lord of The Rings", "Game of Thrones"]
        };
    }

    componentDidMount() { 
        // fetch('http://api.tvmaze.com/search/shows?q=Vikings')
        //   .then(response => response.json())
        //   .then(json => this.setState({ series: json }));
    }

    render(){
        return (
            <div>
                The length of series array - {this.state.series.length}
                <SeriesList list = {this.state.series} />
            </div>
        )
    }
}

export default Series;