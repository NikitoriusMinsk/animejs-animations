import { useEffect } from "react";
import anime from 'animejs/lib/anime.es.js';
import "./scrollAnim.css";

function ScrollAnimation(props){
    

    function handleInput(e){
        animation.seek(animation.duration*(e.target.value/100));
        let path = anime.path('#animPath');
        let animation = anime({
            targets: ".square",
            opacity:["0%","100%"],
            translateX: path('x'),
            translateY: path('y'),
            autoplay: false,
            easing: 'easeInOutSine'
        })
    }

    function handleScroll(){
        if(window.pageYOffset>100) return;
        let path = anime.path('#animPath');
        let animation = anime({
            targets: ".square",
            opacity:["0%","100%"],
            translateX: path('x'),
            translateY: path('y'),
            autoplay: false,
            easing: 'easeInOutSine'
        })
        animation.seek(animation.duration*(window.pageYOffset/100));
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    },[handleScroll])

    return(
        <div className="scrollAnimationContainer">
            <div className="fixed">
                <div className="square" />
                <svg width="375px" height="520px">
                    <path id="animPath" d="M 0 500 C 200 400 200 250 200 50 " stroke="none" fill="none" />
                </svg>
            </div>
            <input onChange={handleInput} type="range" defaultValue="0" />
        </div>
    )
}
 
export default ScrollAnimation;