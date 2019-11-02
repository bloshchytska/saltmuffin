import React from 'react';
import './GridItem.scss';

const GridItem = props =>  {
    let styles = {
        backgroundImage: 'url(' + props.image + ')'
    };

    return (
        <div className="grid-item">
            <img src={props.image} alt=""/>
        </div>
    );
};


export default GridItem;
