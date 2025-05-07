import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import LogoWrap from "../LogoWrap.jsx";

const Visual = () => {
    const textData = [
        'INNOVATE WITH CODEVIDER',
        'SCALABLE WEB SOLUTIONS'
    ];

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.registerPlugin(TextPlugin)

        gsap.timeline()
            .to("#text1", {
                textAlign: "end",
                text: textData[0],
                ease: "none",
                duration: 0.8,
            })
            .to("#text2", {
                text: textData[1],
                ease: "none",
                duration: 1.5,
            })

        // visual animation

        gsap.timeline({
            scrollTrigger: {
                trigger: '.visual',
                start: '100% 100%',
                end: '100% 0%',
                scrub: 1,
                // markers: true,

            }
        })
            .to('.logoWrap #j', {
                x: -150,
                y: 250,
                rotate: 20,
                ease: 'none',
                duration: 5
            }, 0)
            .to('.logoWrap #y', {
                x: -30,
                y: 150,
                rotate: -10,
                ease: 'none',
                duration: 5
            }, 0)
            .to('.logoWrap #o', {
                x: 0,
                y: 400,
                rotate: -10,
                ease: 'none',
                duration: 5
            }, 0)
            .to('.logoWrap #u', {
                x: 50,
                y: 300,
                rotate: 10,
                ease: 'none',
                duration: 5
            }, 0)
            .to('.logoWrap #n', {
                x: 100,
                y: 100,
                rotate: -10,
                ease: 'none',
                duration: 5
            }, 0)
            .to('.logoWrap #g', {
                x: 50,
                y: 450,
                rotate: 20,
                ease: 'none',
                duration: 5
            }, 0)
    })

    return (
        <section id="home" className="visual">
            <div className="inner">
                <h1 className="mainText">
                    <span>
                        <i id="text1">QUdFTkNZ</i>
                    </span>
                    <span>
                        <i id="text2">Q1JFQVRJVkUgQVVESU8</i>
                    </span>
                </h1>
                <h2 className="subText">
                    Crafting high-performance web applications that drive growth.<br />
                    <span>Headquartered in Tirana, Albania — serving clients around the globe.</span>
                </h2>
                <LogoWrap />
            </div>
        </section>
    );
};

export default Visual;
