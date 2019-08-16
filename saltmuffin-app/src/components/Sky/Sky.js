import React, {Component} from 'react';
import './Sky.scss';


class Sky extends Component {
    drawSky() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        const xMax = canvas.width = window.screen.availWidth;
        const yMax = canvas.height = window.screen.availHeight;
        const hmTimes = Math.round(xMax/2 + yMax/2);

        for (let i = 0; i<= hmTimes; i++) {
            const randomX = Math.floor((Math.random() * xMax) + 1);
            const randomY = Math.floor((Math.random() * yMax) + 1);
            const randomSize = Math.floor((Math.random() * 2) + .5);
            const randomOpacityOne = Math.floor((Math.random() * 9) + 1);
            const randomOpacityTwo = Math.floor((Math.random() * 9) + 1);
            const randomHue = Math.floor((Math.random()*360)+1);
            if (randomSize > 1) {
                ctx.shadowBlur = Math.floor((Math.random()*5)+2);
                ctx.shadowColor = 'white';
            }
            ctx.fillStyle = "hsla("+randomHue+", 100%, 60%, ."+randomOpacityOne+randomOpacityTwo+")";
            ctx.beginPath();
            ctx.arc(randomX, randomY, randomSize, 0, 2 * Math.PI);
            ctx.fill();
        }
    }


    componentDidMount() {
        //this.drawSky();
    }

    render() {
        return(
            <div>
                <div className="stars small"></div>
                <div className="stars medium"></div>
                <div className="stars large"></div>
            </div>

        );
    }
}

export default Sky;
