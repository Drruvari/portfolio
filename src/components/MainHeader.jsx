import logo1 from '../assets/images/logo/S_J.png'
import logo2 from '../assets/images/logo/S_Y.png'
import logo3 from '../assets/images/logo/S_O.png'
import logo4 from '../assets/images/logo/S_U.png'
import logo5 from '../assets/images/logo/S_N.png'
import logo6 from '../assets/images/logo/S_G.png'
import {useRef, useState} from "react";

const MainHeader = () => {
    const menuOpenRef = useRef(null)
    const menuBoxRef = useRef(null)

    const [open, setOpen] = useState(false)


    const handleClick = () => {
        if (open === false) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    };
    return (
        <header>
            <div className="inner">
            <a href="#" className="logo">
                    <span><img src={logo1} alt=""/></span>
                    <span><img src={logo2} alt=""/></span>
                    <span><img src={logo3} alt=""/></span>
                    <span><img src={logo4} alt=""/></span>
                    <span><img src={logo5} alt=""/></span>
                    <span><img src={logo6} alt=""/></span>
                </a>
            </div>
            <nav className="gnb">
                <p className="menuOpen" ref={menuOpenRef} onClick={handleClick}>
                    MENU
                </p>
                <ul className={`menuBox ${open ? 'on' : ''}`} ref={menuBoxRef}>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">WORK</a></li>
                    <li><a href="#">PORTFOLIO UX</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;