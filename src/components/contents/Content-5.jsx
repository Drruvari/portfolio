import  { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectListBox from '../ProjectListBox.jsx';

// Register ScrollTrigger plugin once at module scope
gsap.registerPlugin(ScrollTrigger);

const Content5 = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading on scroll
      gsap.from('.mainTextBox h2', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Stagger fade-in for list items
      gsap.from('.listBox li', {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.listBox',
          start: 'top 85%',
        },
      });

      // Parallax effect on listBox
      gsap.to('.listBox', {
        yPercent: 5,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
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
