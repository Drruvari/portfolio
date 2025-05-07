import LogoWrap from "./LogoWrap.jsx";

const MainFooter = () => {
    return (
        <footer id="contact">
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
