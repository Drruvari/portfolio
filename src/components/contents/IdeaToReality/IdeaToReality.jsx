import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import IconBox from '../../IconBox.jsx';
import './IdeaToReality.css';

// Register GSAP plugin once
gsap.registerPlugin(ScrollTrigger);

const IdeaToReality = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the main text span sliding in
            gsap.from(
                '.mainTextBox > span',
                {
                    x: -200,
                    opacity: 0,
                    duration: 1.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                    }
                }
            );

            // Sequential reveal for titles
            gsap.utils.toArray('.mainTextBox .title i').forEach((el, i) => {
                gsap.from(el, {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    delay: i * 0.3,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        end: 'bottom 60%',
                        scrub: true,
                    }
                });
            });

            // Fade in subtext paragraphs
            gsap.from('.subTextBox .subText p', {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: '.subTextBox',
                    start: 'top 85%',
                }
            });
        }, sectionRef);

        ScrollTrigger.refresh();

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="itr">
            <div className="inner">
                <div className="mainTextBox">
                    <span>Let&apos;s turn your idea into reality</span>
                    <div className="in">
                        <video
                            className="box"
                            playsInline
                            autoPlay
                            loop
                            muted
                        >
                            <source
                                src="https://videos.pexels.com/video-files/3129957/3129957-sd_640_360_25fps.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <p className="title a"><i>IN CODE</i></p>
                    </div>
                    <p className="title b"><i>IN QUALITY</i></p>
                    <p className="title c"><i>IN LAUNCH</i></p>
                </div>

                <div className="subTextBox">
                    <div className="subText">
                        <p>Startups, enterprises, SaaS platforms, e‑commerce brands, and more.</p>
                        <p>
                            Whether you&apos;re a non‑profit, educator, or innovator—CodeVider drives your project forward.
                        </p>
                    </div>
                    <IconBox />
                </div>
            </div>
        </section>
    );
};

export default IdeaToReality;
