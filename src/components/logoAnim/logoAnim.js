import React from 'react'
import "./logoAnim.css"
import { ReactComponent as Logo } from './logo.svg'
import anime from 'animejs'

export default function logoAnimationPage() {

    function animate(){
        const timeline = anime.timeline({
            duration: 1000,
            easing: 'easeOutElastic',
            loop: true,
            direction: 'alternate'
        })
        timeline
            .add({
                targets: ".cls-1",
                cx: ["-30", "21.22"],
                cy: ["-50", "41.15"]
            },200)
            .add({
                targets: ".cls-2",
                x: ["-200", "48.77"],
            },400)
            .add({
                targets: ".cls-3",
                y: ["-160","-6"]
            },600)
            .add({
                targets: ".cls-4",
                cy: ["150","85.24"]
            },800)
            .add({
                targets: ".cls-5",
                transform: ["translate(-170 66.93)","translate(17.3 66.93)"]
            },1000)
    }

    return (
        <div className="logoAnimationPageContainer">
            <div className="logo" onClick={animate}>
                <Logo />
            </div>
        </div>
    )
}
