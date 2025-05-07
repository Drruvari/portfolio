import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import LogoWrap from './LogoWrap.jsx';

// Register ScrollTrigger plugin once at module scope
gsap.registerPlugin(ScrollTrigger);

const MainFooter = () => {
    const footerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Fade and slide in heading
            gsap.from('.mainTextBox h2', {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top bottom',
                    end: 'top center',
                    scrub: false,
                },
            });

            // Fade in paragraph text
            gsap.from('.mainTextBox p span', {
                y: 30,
                opacity: 0,
                duration: 1,
                delay: 0.3,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 80%',
                },
            });

            // Animate talk button arrow (scale/pulse)
            gsap.from('.talkBtn span', {
                scale: 0,
                opacity: 0,
                duration: 0.8,
                ease: 'back.out(1.7)',
                delay: 0.6,
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 75%',
                },
            });

            // Stagger in the footer action buttons
            gsap.from('.btnBox .btn', {
                y: 20,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: 'power2.out',
                delay: 0.8,
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 70%',
                },
            });

            // Fade in copyright and logo
            gsap.from('.copyright', {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                delay: 1,
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 65%',
                },
            });
            gsap.from(LogoWrap, {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                delay: 1.2,
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 65%',
                },
            });

            // Refresh ScrollTrigger to ensure proper start/end
            ScrollTrigger.refresh();
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer id="contact" ref={footerRef}>
            <div className="inner">
                <div className="box">
                    <div className="mainTextBox">
                        <h2>Let&apos;s Talk</h2>
                        <p>
                            <span>Have a project, feedback, or just want to say hello?</span>
                            Send us a message or leave your contact details, and we&apos;ll get back to you.
                        </p>
                    </div>
                    <div className="talkBtn">
                        <a href="#contact"><span></span></a>
                    </div>
                    <div className="btnBox">
                        <a href="mailto:hr@codevider.com" className="btn">Email</a>
                        <a href="tel:+355123456789" className="btn">Call</a>
                        <a href="https://linkedin.com/CodeVider" className="btn" target="_blank" rel="noopener">LinkedIn</a>
                        <a href="https://instagram.com/CodeVider" className="btn" target="_blank" rel="noopener">Instagram</a>
                    </div>
                </div>
                <div className="copyright">
                    <p>© CodeVider 2025</p>
                </div>
            </div>
            <LogoWrap />
        </footer>
    );
};

export default MainFooter;

