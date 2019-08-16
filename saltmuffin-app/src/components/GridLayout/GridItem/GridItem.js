import React from 'react';
import './GridItem.scss';

const GridItem = props =>  {
    let styles = {
        backgroundImage: 'url(' + props.image + ')',
        backgroundSize: 'cover',
        width: '200px',
        height: '300px',
        backgroundPosition: 'center'
    };

    return (
        <div className="grid-item">
            <div style={styles}/>
        </div>
    );
};

export default GridItem;
