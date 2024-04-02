import ListBox from "../ListBox.jsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Content4 = () => {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        //.con4 .listBox animation

        gsap.utils.toArray('.con4 .listBox .box').forEach((selector) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: selector,
                    start: '0% 20%',
                    end: '0% 0%',
                    scrub: 1,
                }
            })
                .to(selector, {
                    transform: 'rotateX(-10deg) scale(0.9)',
                    transformOrigin: 'top',
                    filter: 'brightness(0.3)',
                })
        })
    })

    return (
        <section className={"con4"}>
            <div className="inner">
                <div className="mainTextBox">
                    <span>OUR SERVICE</span>
                    <p className="title a"><i>CREATION</i></p>
                    <p className="title b"><i>PRODUCTION</i></p>
                    <div className="in">
                        <video className="box" playsInline="" autoPlay="" loop="" muted="">
                            <source
                                src="https://cdn.sanity.io/files/u6q95fqm/production/c0594d11b2a34d37493ac112d3cb8d1d315a129e.mp4"
                                type="video/mp4"/>
                        </video>
                        <p className="title c"><i>DIFFUSION</i></p>
                    </div>
                </div>
                <ul className="listBox">
                    <ListBox code={"box a"} title={"CREATION"} number={"1"}/>
                    <ListBox code={"box b"} title={"PRODUCTION"} number={"2"}/>
                    <ListBox code={"box c"} title={"DIFFUSION"} number={"3"}/>
                </ul>
                <div className="subTextBox">
                    <div className="subText">
                        <p>At Qude, we don't have big or small projects. We only have people, creativity, sharing.</p>
                        <p>Each podcast should be a succession of moments of pleasure. Exceptional moments. Design,
                            production, distribution. And listening.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content4;