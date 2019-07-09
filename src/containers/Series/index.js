import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import 'whatwg-fetch';

class Series extends Component {
    constructor(props){
        super(props);
        this.state = {
            series: ["Vikings", "Lord of The Rings", "Game of Thrones"],
            seriesName: '',
            isFetching: false
        };
        
    }

    componentDidMount() { 
        // if I want
        // fetch('http://api.tvmaze.com/search/shows?q=Vikings')
        //   .then(response => response.json())
        //   .then(json => this.setState({ series: json }));
    }
    
    onSeriesInputChange = e => {
        this.setState({ seriesName: e.target.value, isFetching: true });
        // fetch('http://api.tvmaze.com/search/shows?q=${e.target.value}')
        //   .then(response => response.json())
        //   .then(json => this.setState({ series: json, isFetching: false }));

        // This will make the search method (if I write Vikings in the text input)
        // It will fetch the data from the link
        // Awesome!!!

        // console.log(e)
        // console.log(e.target.value)
        console.log(this.state.seriesName)
    }

    render(){
        const {series, seriesName, isFetching} = this.state;

        return (
            <div>
                {/* The length of series array - {this.state.series.length} */}
                <div>
                    <input
                        value = {seriesName}
                        type = "text" 
                        onChange = {this.onSeriesInputChange}
                    />
                </div>
                {/* These two if statements cannot be executed 
                (means that it is always false)
                because I have validated the number of the series in the state) */}
                {
                    series.length === 0 && seriesName === '' &&
                    <p>Please type the TV series you want to find</p>
                }
                {
                    series.length === 0 && seriesName !== '' &&
                    <p>The TV series you type in cannot be found</p>
                }
                <SeriesList list = {this.state.series} />
            </div>
        )
    }
}

export default Series;