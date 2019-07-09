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
        // if I want
        // fetch('http://api.tvmaze.com/search/shows?q=Vikings')
        //   .then(response => response.json())
        //   .then(json => this.setState({ series: json }));
    }
    
    onSeriesInputChange = e => {
        // fetch('http://api.tvmaze.com/search/shows?q=${e.target.value}')
        //   .then(response => response.json())
        //   .then(json => this.setState({ series: json }));

        // This will make the search method (if I write Vikings in the text input)
        // It will fetch the data from the link
        // Awesome!!!

        // console.log(e)
        console.log(e.target.value)
    }

    render(){
        return (
            <div>
                The length of series array - {this.state.series.length}
                <div>
                    <input type="text" onChange={this.onSeriesInputChange}/>
                </div>
                <SeriesList list = {this.state.series} />
            </div>
        )
    }
}

export default Series;