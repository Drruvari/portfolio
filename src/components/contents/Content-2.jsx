import IconBox from "../IconBox.jsx";

const Content2 = () => {
    return (
        <section className="con2">
            <div className="inner">
                <div className="mainTextBox">
                    <span>Let&apos;s turn your idea into reality</span>
                    <div className="in">
                        <video className="box" playsInline autoPlay loop muted>
                            <source
                                src="https://videos.pexels.com/video-files/3129957/3129957-sd_640_360_25fps.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <p className="title a">
                            <i>IN CODE</i>
                        </p>
                    </div>
                    <p className="title b">
                        <i>IN QUALITY</i>
                    </p>
                    <p className="title c">
                        <i>IN LAUNCH</i>
                    </p>
                </div>
                <div className="subTextBox">
                    <div className="subText">
                        <p>Startups, enterprises, SaaS platforms, e‑commerce brands, and more.</p>
                        <p>
                            Whether you&apos;re a non‑profit, educator, or innovator—CodeVider drives your project forward.
                        </p>
                    </div>
                    <IconBox />
                </div>
            </div>
        </section>
    );
};

export default Content2;
