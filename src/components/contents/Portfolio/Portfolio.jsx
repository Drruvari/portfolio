import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import ProjectBox from '../../ProjectBox.jsx';
import './Portfolio.css';

// Register GSAP plugin once
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the section heading
            gsap.from('.textBox h4', {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current.querySelector('.textBox h4'),
                    start: 'top 80%',
                },
            });

            // Animate each ProjectBox item staggered
            gsap.from(sectionRef.current.querySelectorAll('.listBox > *'), {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            });
        }, sectionRef);

        ScrollTrigger.refresh();

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="portfolio" className="portfolio">
            <div className="inner">
                <div className="textBox">
                    <h4>Featured Projects</h4>
                </div>
                <ul className="listBox">
                    <ProjectBox code="ecom" title="E-Commerce Platform" year="2024" />
                    <ProjectBox code="saas" title="SaaS Dashboard" year="2024" />
                    <ProjectBox code="marketing" title="Marketing Site" year="2023" />
                    <ProjectBox code="cms" title="CMS Application" year="2024" />
                    <ProjectBox code="landing" title="Landing Page" year="2023" />
                    <ProjectBox code="analytics" title="Analytics Tool" year="2024" />
                    <ProjectBox code="api" title="Custom API" year="2023" />
                    <ProjectBox code="mobile" title="Mobile Web App" year="2024" />
                    <ProjectBox code="crm" title="CRM Integration" year="2023" />
                </ul>
            </div>
        </section>
    );
};

export default Portfolio;
