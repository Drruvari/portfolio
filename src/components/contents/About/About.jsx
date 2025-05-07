import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import './About.css'

// Register GSAP plugin once
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const prompts = [
        'Need a high-performance web app?',
        'Looking to scale quickly?',
        'Seeking cost-effective expertise?',
        'Want maintainable, clean code?',
        'Ready to accelerate your project?'
    ];

    useLayoutEffect(() => {
        // Create a GSAP context for this component
        const ctx = gsap.context(() => {
            // Looping text animation
            const items = sectionRef.current.querySelectorAll('.textAni li');
            const textTimeline = gsap.timeline({ repeat: -1, yoyo: true });
            items.forEach((el) => {
                textTimeline.to(el, {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power4.out',
                    repeat: 1,
                    yoyo: true
                });
            });

            // Scroll-triggered entrance for the main text
            const mainTextEl = sectionRef.current.querySelector('.mainText p');
            gsap.fromTo(
                mainTextEl,
                { x: -150, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 2,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: mainTextEl,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1
                    }
                }
            );
        }, sectionRef);

        ScrollTrigger.refresh();

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" className="about" ref={sectionRef}>
            <div className="inner">
                <div className="box">
                    <div className="mainText">
                        <p>Empowering businesses with robust web solutions.</p>
                    </div>
                    <div className="subText">
                        <p>
                            At CodeVider, we transform your vision into scalable digital products.<br />
                            Our dedicated development team ensures clean code, agile workflows, and seamless collaboration.
                        </p>
                        <a href="#contact" className="btn">Start Your Project</a>
                    </div>
                </div>
                <div className="textAni">
                    <ul>
                        {prompts.map((text, idx) => (
                            <li key={idx}>{text}</li>
                        ))}
                    </ul>
                    <a href="#contact" className="btn">Contact Us</a>
                </div>
            </div>
        </section>
    );
};

export default About;
