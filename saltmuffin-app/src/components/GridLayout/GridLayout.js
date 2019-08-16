import React, {Component} from 'react';
import './GridLayout.scss';

class GridLayout extends Component {
    render() {
        return (
            <div className="grid-container">
                {this.props.children}
            </div>
        );
    }
}

export default GridLayout;
