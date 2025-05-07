import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import ListBox from '../../ListBox.jsx';
import './Services.css';

// Register ScrollTrigger plugin once at module scope
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        // Create a scoped context for this section
        const ctx = gsap.context(() => {
            // Animate each service box on scroll
            gsap.utils.toArray('.listBox .box').forEach((box) => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: box,
                        start: '0% 20%',
                        end: '0% 0%',
                        scrub: 1,
                    },
                })
                    .to(box, {
                        transform: 'rotateX(-10deg) scale(0.9)',
                        transformOrigin: 'top',
                        filter: 'brightness(0.3)',
                    });
            });
        }, sectionRef);

        // Ensure ScrollTrigger measures fresh positions
        ScrollTrigger.refresh();

        return () => {
            // Cleanup animations and ScrollTriggers for this section
            ctx.revert();
        };
    }, []);

    return (
        <section id="services" className="services" ref={sectionRef}>
            <div className="inner">
                <div className="mainTextBox">
                    <span>OUR SERVICE</span>
                    <p className="title a"><i>FRONTEND DEVELOPMENT</i></p>
                    <p className="title b"><i>BACKEND DEVELOPMENT</i></p>
                    <div className="in">
                        <video className="box" playsInline autoPlay loop muted>
                            <source
                                src="https://videos.pexels.com/video-files/3130182/3130182-sd_640_360_30fps.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <p className="title c"><i>DATABASE MANAGEMENT</i></p>
                    </div>
                </div>

                <ul className="listBox">
                    <ListBox code="frontend" title="Frontend Development" number="1" />
                    <ListBox code="backend" title="Backend Development" number="2" />
                    <ListBox code="database" title="Database Management" number="3" />
                </ul>

                <div className="subTextBox">
                    <div className="subText">
                        <p>At CodeVider, every project is a partnership of technology and creativity.</p>
                        <p>From UI/UX design through development and maintenance, we deliver reliable, scalable solutions tailored to your needs.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
