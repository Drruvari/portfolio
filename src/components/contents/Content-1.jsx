import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

// Register plugin once
gsap.registerPlugin(ScrollTrigger);

const Content1 = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        // Scope all selectors inside this section
        const ctx = gsap.context(() => {
            // Infinite list animation
            const textAni = gsap.timeline({ repeat: -1 }).play();
            gsap.utils.toArray('.textAni li').forEach(el => {
                textAni.to(el, {
                    x: 0,
                    opacity: 1,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power4.out',
                    duration: 0.8,
                });
            });

            // Scroll-triggered entrance for main text
            gsap.fromTo(
                '.mainText p',
                { x: -150, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 2,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.mainText',
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                }
            );
        }, sectionRef);

        return () => {
            // Clean up animations & ScrollTriggers
            ctx.revert();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="con1">
            <div className="inner">
                <div className="box">
                    <div className="mainText">
                        <p>&quot;CREATING A PODCAST <br /> IS GIVING VOICE&quot;</p>
                    </div>

                    <div className="subText">
                        <p>From childhood, I was fascinated by the diversity and strength of emotions that music could<br />Then I fell in love with radio.</p>
                        <p>I evolved in this environment, surrounded by legends. And I became aware of the power of the voice.</p>
                        <p>Today, the podcast is a no-brainer. It is sound and meaning, in perfect synergy.</p>
                    </div>

                    <div className="subText">
                        <p>Allow everyone to share their passion. To convey his emotion.<br />Get your messages across. With efficiency, aesthetics, and pleasure. It&apos;s our job.</p>
                        <a href="#" className="btn">Listen to the manifesto</a>
                    </div>
                </div>

                <div className="textAni">
                    <ul>
                        <li>Do you have a (vague) idea?</li>
                        <li>A (crazy) desire?<br />A message (to shout)?</li>
                        <li>Need a little helping hand?</li>
                        <li>Or do we take care of everything?</li>
                        <li>You are in the right place.</li>
                        <li>Contact us</li>
                    </ul>
                    <a href="#" className="btn">Contact us</a>
                </div>
            </div>
        </section>
    );
};

export default Content1;
