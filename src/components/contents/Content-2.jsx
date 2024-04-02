import IconBox from "../IconBox.jsx";

const Content2 = () => {
    return (
        <section className={"con2"}>
            <div className="inner">
                <div className="mainTextBox">
                    <span>Together, let's put your project together</span>
                    <div className="in">
                        <video className="box" playsInline="" autoPlay="" loop="" muted="">
                            <source
                                src="https://cdn.sanity.io/files/u6q95fqm/production/db2bced0a14e9b65aa15357cae7799696903a8d4.mp4"
                                type="video/mp4"/>
                        </video>
                        <p className="title a">
                            <i>IN SHAPE</i>
                        </p>
                    </div>
                    <p className="title b">
                        <i>IN SOUND</i>
                    </p>
                    <p className="title c">
                        <i>ONLINE</i>
                    </p>
                </div>
                <div className="subTextBox">
                    <div className="subText">
                        <p>Institutions, companies, independent creators, sports clubs, associations, brands...</p>
                        <p>And tomorrow, who knows? The introverted, the avant-garde, the original, the expansive, the
                            old-timers, the dreamers, the spiritual? YOU ?</p>
                    </div>
                    <IconBox />
                </div>
            </div>
        </section>
    )
}

export default Content2