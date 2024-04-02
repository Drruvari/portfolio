import './App.css'
import MainHeader from "./components/MainHeader.jsx";
import Visual from "./components/contents/Visual.jsx";
import Content1 from "./components/contents/Content-1.jsx";
import Content2 from "./components/contents/Content-2.jsx";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Content3 from "./components/contents/Content-3.jsx";
import Content4 from "./components/contents/Content-4.jsx";
import Content5 from "./components/contents/Content-5.jsx";
import MainFooter from "./components/MainFooter.jsx";

function App() {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        gsap.utils.toArray('.mainTextBox .title i').forEach((selector) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: selector,
                    start: '100% 100%',
                    end: '100% 100%',
                    scrub: 1,
                    // markers: true,
                }
            })
                .fromTo(selector, {
                    overflow: 'hidden',
                    y: 150,
                }, {
                    y: 0,
                    ease: 'none',
                    duration: 5
                }, 0)
        })

        gsap.utils.toArray('.subText p').forEach((selector) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: selector,
                    start: '100% 100%',
                    end: '100% 100%',
                    scrub: 1,
                    // markers: true,
                }
            })
                .fromTo(selector, {
                    opacity: 0,
                    y: 100
                }, {
                    opacity: 1,
                    y: 0,
                    ease: 'none',
                    duration: 5
                }, 0)
        })
    })

    return (
        <main className={`wrap`}>
            <MainHeader/>
            <Visual />
            <Content1 />
            <Content2 />
            <Content3 />
            <Content4 />
            <Content5 />
            <MainFooter />
        </main>
    )
}

export default App