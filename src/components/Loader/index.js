import React from 'react';
import loaderPic from '../../images/giphy.gif';

const Loader = props => (
    <div>
        <p>Loading....</p>
        <img 
            alt = 'Loader Icon'
            src = {loaderPic} />
    </div>
);

export default Loader;