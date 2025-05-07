import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Content1 = () => {
    // Highlight prompts for clients
    const prompts = [
        'Need a high-performance web app?',
        'Looking to scale quickly?',
        'Seeking cost-effective expertise?',
        'Want maintainable, clean code?',
        'Ready to accelerate your project?'
    ];

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
        <section id="about" className="con1">
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
                        {prompts.map((text, idx) => <li key={idx}>{text}</li>)}
                    </ul>
                    <a href="#contact" className="btn">Contact Us</a>
                </div>
            </div>
        </section>
    );
};

export default Content1;
