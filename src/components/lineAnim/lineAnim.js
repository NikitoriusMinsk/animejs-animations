import "./lineAnim.css";
import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
 
function LineAnimation(props){
    let line = "M 25 299 C 66 304 82 286 134 291 C 180 288 186 337 275 346 C 360 336 345 291 428 283 C 510 301 516 354 588 332 C 666 307 687 268 790 283 ";

    useEffect(()=>{
        let point1 = anime.path('#point1');
        let point2 = anime.path('#point2');
        let point3 = anime.path('#point3');
        let point4 = anime.path('#point4');
        
        let timeline = anime.timeline({
        duration: 10000,
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate',
        delay: 0
        })

        timeline.add({
        targets: "#mainLine",
        d: [
            {value: "M 25 299 C 66 304 76 306 130 291 C 193 276 217 290 283 312 C 363 338 348 308 429 297 C 520 288 518 295 589 294 C 661 298 687 268 790 283 "}
        ]
        },0).add({
        targets: "#point1",
        d:[
            {value:"M 130 291"}
        ]
        },0).add({
        targets: "#point2",
        d:[
            {value:"M 283 312"}
        ]
        },0).add({
        targets: "#point3",
        d:[
            {value:"M 429 297"}
        ]
        },0).add({
        targets: "#point4",
        d:[
            {value:"M 589 294"}
        ]
        },0).add({
        targets: '#sq1',
        translateY: point1('y'),
        translateX: point1('x'),
        },0).add({
        targets: '#sq2',
        translateY: point2('y'),
        translateX: point2('x'),
        },0).add({
        targets: '#sq3',
        translateY: point3('y'),
        translateX: point3('x'),
        },0).add({
        targets: '#sq4',
        translateY: point4('y'),
        translateX: point4('x'),
        },0)
    })

    return (
        <div className="lineAnimationContainer">
        <div className="container">
            <div className="circle" id="sq1"/>
            <div className="circle" id="sq2"/>
            <div className="circle" id="sq3"/>
            <div className="circle" id="sq4"/>
            <svg id="line" height="400px" width="1000px">
            <path id="mainLine" d={line} stroke="white" fill="none" ></path>
            <path id="point1" d="M 134 291" stroke="red"/>
            <path id="point2" d="M 275 346" stroke="red"/>
            <path id="point3" d="M 428 283" stroke="red"/>
            <path id="point4" d="M 588 332" stroke="red"/>
            </svg>
        </div>
        </div>
    );
}
 
export default LineAnimation;