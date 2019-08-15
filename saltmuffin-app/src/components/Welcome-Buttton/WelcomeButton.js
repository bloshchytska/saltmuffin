import React from 'react';
import './WelcomeButton.scss';
import {Link} from "react-router-dom";

const WelcomeButton = props => (
    <div className="body-actions__action">
        <Link to={props.linkTo ? props.linkTo : "#"}>

            <div className="body-actions__action__underline">
                <img alt={ props.buttonTitle ? props.buttonTitle : "" }
                     src= { props.buttonImg }/>
                <span> { props.buttonTitle }</span>
            </div>
        </Link>
    </div>
);

export default WelcomeButton;
