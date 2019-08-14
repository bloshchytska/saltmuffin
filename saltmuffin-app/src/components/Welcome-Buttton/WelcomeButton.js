import React from 'react';
import './WelcomeButton.scss';

const welcomeButton = (props) => {
    return (
        <div className="body-actions__action">
            <div className="body-actions__action__underline">
                <img alt={props.buttonTitle}
                     src={props.buttonImg}/>
                <span>{props.buttonTitle}</span>
            </div>
        </div>
    );
};

export default welcomeButton;
