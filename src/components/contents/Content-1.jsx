import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

const Content1 = () => {

    useGSAP(() => {
        let textAni = gsap.timeline({
            repeat: -1,
        })

        textAni.play()

        gsap.utils.toArray('.con1 .textAni li').forEach((selector) => {
            textAni.to(selector, 0.8, {
                opacity: 1,
                repeat: 1,
                delay: 0,
                x: 0,
                yoyo: true,
                ease: 'power4.out',
            })
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '.con1 .mainText p',
                start: '100% 100%',
                end: '100% 100%',
                scrub: 1,
                // markers: true,
            }
        }).fromTo('.con1 .mainText p', {
            x: -150,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            ease: 'none',
            duration: 2
        })
    })

    return (
        <section className={"con1"}>
            <div className="inner">
                <div className="box">
                    <div className="mainText">
                        <p>"CREATING A PODCAST <br/> IS GIVING VOICE"</p>
                    </div>
                    <div className="subText">
                        <p>From childhood, I was fascinated by the diversity and strength of emotions that music could
                            provide.
                            <br/>Then I fell in love with radio.</p>
                        <p>I evolved in this environment, surrounded by legends. And I became aware of the power of the
                            voice.</p>
                        <p>Today, the podcast is a no-brainer. It is sound and meaning, in perfect synergy.</p>
                    </div>
                    <div className="subText">
                        <p>Allow everyone to share their passion. To convey his emotion.
                            <br/>Get your messages across. With efficiency, aesthetics, and pleasure. It&apos;s our job.</p>
                        <a href="" className="btn">Listen to the manifesto</a>
                    </div>
                </div>
                <div className="textAni">
                    <ul>
                        <li>Do you have a (vague) idea?</li>
                        <li>A (crazy) desire?<br/>A message (to shout)?</li>
                        <li>Need a little helping hand?</li>
                        <li>Or do we take care of everything?</li>
                        <li>You are in the right place.</li>
                        <li>Contact us</li>
                    </ul>
                    <a href="" className="btn">Contact us</a>
                </div>
            </div>
        </section>
    )
}

export default Content1;