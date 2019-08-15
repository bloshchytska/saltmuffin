import React from 'react';
import './ButtonLink.scss'

const ButtonLink = props => (
    <div className="link-wrapper">
        <div className="link-img">
            <img src={props.linkImgSrc}  alt={props.linkImgAlt} />
        </div>
        <a  className={props.styleClass ? "link--w-bg" : "link"}
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
        >
            {props.linkText}
        </a>
    </div>
);

export default ButtonLink;
