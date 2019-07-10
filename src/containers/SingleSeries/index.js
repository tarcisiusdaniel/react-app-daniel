import React from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: null
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then(response => response.json())
            .then(json => this.setState({ show: json }));
    }

    render(){
        const { show } = this.state;
        return (
            <div>
                <p>
                    { show === null && <Loader loadingMessage = "Loading..."/> }
                    {
                        show !== null &&
                        <div>
                            <p>We found it!</p>
                            <p>{show.name}</p>
                            <p>Premiered - {show.premiered}</p>
                            <p>Rating - {show.rating.average}</p>
                            <p>Episodes - {show._embedded.episodes.length}</p>
                            <p>
                                <img 
                                    alt="Show" 
                                    src = {show.image.medium} 
                                />
                            </p>
                        </div>
                    }
                </p>
            </div>
        );
    }
}

export default SingleSeries;