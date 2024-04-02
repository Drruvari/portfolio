import logo1 from "../assets/images/logo/L_J.png";
import logo2 from "../assets/images/logo/L_Y.png";
import logo3 from "../assets/images/logo/L_O.png";
import logo4 from "../assets/images/logo/L_U.png";
import logo5 from "../assets/images/logo/L_N.png";
import logo6 from "../assets/images/logo/L_G.png";

const LogoWrap = () => {
    return (
        <div className="logoWrap">
            <span>
                <img id="j" src={logo1} alt=""/>
            </span>
            <span>
                <img id="y" src={logo2} alt=""/>
            </span>
            <span>
                <img id="o" src={logo3} alt=""/>
            </span>
            <span>
                <img id="u" src={logo4} alt=""/>
            </span>
            <span>
                <img id="n" src={logo5} alt=""/>
            </span>
            <span>
                <img id="g" src={logo6} alt=""/>
            </span>
        </div>
    )
}

export default LogoWrap;