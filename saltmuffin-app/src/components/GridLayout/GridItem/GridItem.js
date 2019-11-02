import React from 'react';
import './GridItem.scss';

const GridItem = props =>  {
    let styles = {
        backgroundImage: 'url(' + props.image + ')'
    };

    return (
        <div className="grid-item">
            <div style={styles}/>
        </div>
    );
};


export default GridItem;
