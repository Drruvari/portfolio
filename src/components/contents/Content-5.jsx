import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import ProjectListBox from '../ProjectListBox.jsx';

// Register ScrollTrigger plugin once at module scope
gsap.registerPlugin(ScrollTrigger);

const Content5 = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the section heading
            gsap.from(
                sectionRef.current.querySelector('h2'),
                {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'top 70%',
                        scrub: true,
                    },
                }
            );

            // Stagger in the project list items
            gsap.from(
                sectionRef.current.querySelectorAll('li'),
                {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.out',
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                }
            );
        }, sectionRef);

        // Ensure ScrollTrigger positions are recalculated after layout
        ScrollTrigger.refresh();

        return () => {
            // Clean up animations & ScrollTriggers for this section
            ctx.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="con5">
            <div className="inner">
                <div className="mainTextBox">
                    <h2>Other Projects</h2>
                    <ul className="listBox">
                        <ProjectListBox name="Amazon Data Analysis" category="Data" year="2025" />
                        <ProjectListBox name="Arcon" category="Management" year="2025" />
                        <ProjectListBox name="Beautybooks" category="Beauty" year="2025" />
                        <ProjectListBox name="Datastake" category="Analytics" year="2025" />
                        <ProjectListBox name="Paged" category="Publishing" year="2025" />
                        <ProjectListBox name="Simplitime" category="Scheduling" year="2025" />
                        <ProjectListBox name="Whiteboxed" category="CRE Broker Platform" year="2025" />
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Content5;
