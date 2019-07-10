import React from 'react';
import loaderPic from '../../images/giphy.gif';

const Loader = props => (
    <div>
        <p>{props.loadingMessage}</p>
        <img 
            //feel free to add style to the pic
            //style = ({})
            alt = 'Loader Icon'
            src = {loaderPic} />
    </div>
);

export default Loader;