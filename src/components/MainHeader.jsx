import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useState } from "react";
import logo from '../assets/images/codevider-logo.svg';

// Register GSAP ScrollTo plugin for smooth scrolling
gsap.registerPlugin(ScrollToPlugin);

const MainHeader = () => {
    const [open, setOpen] = useState(false);

    const scrollToSection = (id) => {
        setOpen(false);
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: id, autoKill: false },
            ease: "power2.inOut"
        });
    };

    return (
        <header>
            <div className="inner">
                <a
                    href="#home"
                    className="logo"
                    onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
                >
                    <img src={logo} alt="CodeVider Logo" />
                </a>
            </div>
            <nav className="gnb">
                <button
                    className="menuOpen"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    MENU
                </button>
                <ul className={`menuBox ${open ? 'on' : ''}`}>
                    <li>
                        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}>
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("#about"); }}>
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection("#portfolio"); }}>
                            PORTFOLIO
                        </a>
                    </li>
                    <li>
                        <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("#services"); }}>
                            SERVICES
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("#contact"); }}>
                            CONTACT
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
