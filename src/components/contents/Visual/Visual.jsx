import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { useLayoutEffect, useRef } from 'react';
import LogoWrap from '../../LogoWrap';
import './Visual.css';

// Register GSAP plugins at module scope
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Visual = () => {
    const sectionRef = useRef(null);
    const textRefs = useRef({ text1: null, text2: null });

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Initial text typing animation
            gsap.timeline()
                .to(textRefs.current.text1, {
                    textAlign: 'end',
                    text: 'INNOVATE WITH CODEVIDER',
                    ease: 'none',
                    duration: 0.8,
                })
                .to(textRefs.current.text2, {
                    text: 'SCALABLE WEB SOLUTIONS',
                    ease: 'none',
                    duration: 1.5,
                });

            // Scroll-triggered logo motion
            gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: '100% 100%',
                    end: '100% 0%',
                    scrub: 1,
                }
            })
                .to('.logoWrap #j', { x: -150, y: 250, rotate: 20, ease: 'none', duration: 5 }, 0)
                .to('.logoWrap #y', { x: -30, y: 150, rotate: -10, ease: 'none', duration: 5 }, 0)
                .to('.logoWrap #o', { x: 0, y: 400, rotate: -10, ease: 'none', duration: 5 }, 0)
                .to('.logoWrap #u', { x: 50, y: 300, rotate: 10, ease: 'none', duration: 5 }, 0)
                .to('.logoWrap #n', { x: 100, y: 100, rotate: -10, ease: 'none', duration: 5 }, 0)
                .to('.logoWrap #g', { x: 50, y: 450, rotate: 20, ease: 'none', duration: 5 }, 0);
        }, sectionRef);

        // Recalculate ScrollTrigger positions after layout
        ScrollTrigger.refresh();

        return () => ctx.revert();
    }, []);

    return (
        <section id="home" className="visual" ref={sectionRef}>
            <div className="inner">
                <h1 className="mainText">
                    <span>
                        <i
                            id="text1"
                            ref={el => (textRefs.current.text1 = el)}
                        >
                            QUdFTkNZ
                        </i>
                    </span>
                    <span>
                        <i
                            id="text2"
                            ref={el => (textRefs.current.text2 = el)}
                        >
                            Q1JFQVRJVkUgQVVESU8
                        </i>
                    </span>
                </h1>
                <h2 className="subText">
                    Crafting high-performance web applications that drive growth.<br />
                    <span>
                        Headquartered in Tirana, Albania — serving clients around the globe.
                    </span>
                </h2>
                <LogoWrap />
            </div>
        </section>
    );
};

export default Visual;
