import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './BWLayout.scss';

class BWLayout extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="wrapper__header">
                    <div className="wrapper__header__close-link">
                        <Link to="/"> × </Link>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default BWLayout;
