import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './BWLayout.scss';
import Emoji from "../Emoji/Emoji";

class BWLayout extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="header-wrapper">
                    <div className="wrapper__header">
                        <div className="wrapper__header__close-link">
                            <Link to="/"> ⬅  </Link>
                        </div>
                        {this.props.subHeaderTitle ?
                            <div className="wrapper__sub-header">
                                <div className="wrapper__sub-header__muffin">
                                    Current Muffin:
                                </div>
                                <div className="wrapper__sub-header__title">
                                    {this.props.subHeaderTitle}
                                </div>
                            </div>

                            : null}
                        {
                            this.props.headerLinkName ?
                                <div className="wrapper__header__button">
                                    <Emoji
                                        symbol="⛄"
                                    />
                                    {this.props.headerLinkName}
                                </div>
                                : null
                        }

                    </div>

                </div>

                {this.props.children}
            </div>
        );
    }
}

export default BWLayout;
