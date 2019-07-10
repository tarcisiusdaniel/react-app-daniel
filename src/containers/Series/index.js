import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';
import 'whatwg-fetch';
// "Vikings", "Lord of The Rings", "Game of Thrones"

class Series extends Component {
    constructor(props){
        super(props);
        this.state = {
            series: [],
            seriesName: '',
            isFetching: false
        };
        
    }
    
    onSeriesInputChange = e => {
        this.setState({
            seriesName: e.target.value,
            isFetching: true
        });
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
          .then(response => response.json())
          .then(json => this.setState({ series: json, isFetching: false }));

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
                <Intro message = "Here you can find most of all your loved TV series" />
                {/* The length of series array - {this.state.series.length} */}
                <div>
                    <input
                        value = {seriesName}
                        type = "text" 
                        onChange = {this.onSeriesInputChange}
                    />
                </div>
                {
                    !isFetching && series.length === 0 && seriesName.trim() === '' &&
                    <p>Search the TV series that you want by typing the name in the bar provided</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== '' &&
                    <p>Sorry, but the TV series that you search cannot be found</p>
                }
                {
                    isFetching && 
                    <Loader loadingMessage = "Loading...."/>
                }
                {
                    !isFetching && seriesName.trim() !== '' && series.length !== 0 &&
                    <div>
                        <p>Here is what we found by far</p>
                        <SeriesList list = {this.state.series} />
                    </div>
                }
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
}

export default Series;