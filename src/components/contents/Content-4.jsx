import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ListBox from "../ListBox.jsx";

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
        <section id="services" className={"con4"}>
            <div className="inner">
                <div className="mainTextBox">
                    <span>OUR SERVICE</span>
                    <p className="title a"><i>FRONTEND DEVELOPMENT</i></p>
                    <p className="title b"><i>BACKEND DEVELOPMENT</i></p>
                    <div className="in">
                        <video className="box" playsInline autoPlay loop muted>
                            <source
                                src="https://videos.pexels.com/video-files/3130182/3130182-sd_640_360_30fps.mp4"
                                type="video/mp4" />
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
    )
}

export default Content4;
