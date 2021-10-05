import anime from 'animejs';
import "./transitionAnim.css";
import transition from "./image/transition.png"
import { useRef } from 'react';
import { useHistory } from 'react-router';

function TransitionAnimation(props){
    const bg = useRef();
    const history = useHistory()

    function animate(){
        anime({
            targets: ".transitionBg",
            height: [0, '150%'],
            width: [0, '150%'],
            easing: "easeInOutSine",
            complete: () => {
                history.push(`/page`)
            }
        })
    }

    return(
        <div className="transitionAnimationContainer">
            <div ref={bg} className="transitionBg">
                <img src={transition} />
            </div>
            <div className="clickableObject" onClick={animate} >
                Click me!
            </div>
        </div> 
    )
}
 
export default TransitionAnimation;