import LogoWrap from "./LogoWrap.jsx";

const MainFooter = () => {
    return (
        <footer>
            <div className="inner">
                <div className="box">
                    <div className="mainTextBox">
                        <h2>Let's TALK</h2>
                        <p>
                            <span>Contact, testimonial or simple hello...</span>
                            Leave us an audio message<br/>and your contact details if you wish to be contacted.
                        </p>
                    </div>
                    <div className="talkBtn">
                        <a href=""><span></span></a>
                    </div>
                    <div className="btnBox">
                        <a href="" className="btn">email</a>
                        <a href="" className="btn">call</a>
                        <a href="" className="btn">facebook</a>
                        <a href="" className="btn">instagram</a>
                    </div>
                </div>
                <div className="copyright">
                    <p>GK &#64; 2024</p>
                </div>
            </div>
            <LogoWrap />
        </footer>
    )
}

export default MainFooter;