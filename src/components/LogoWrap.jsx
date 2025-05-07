import logo1 from "../assets/images/logos/C_L.png"
import logo2 from "../assets/images/logos/O_L.png"
import logo3 from "../assets/images/logos/D_L.png"
import logo4 from "../assets/images/logos/E_L.png"
import logo5 from "../assets/images/logos/V_L.png"
import logo6 from "../assets/images/logos/I_L.png"
import logo7 from "../assets/images/logos/D_L1.png"
import logo8 from "../assets/images/logos/E_L1.png"
import logo9 from "../assets/images/logos/R_L.png"


const LogoWrap = () => {
    return (
        <div className="logoWrap">
            <span>
                <img id="j" src={logo1} alt="C logo" />
            </span>
            <span>
                <img id="y" src={logo2} alt="O logo" />
            </span>
            <span>
                <img id="o" src={logo3} alt="D logo" />
            </span>
            <span>
                <img id="u" src={logo4} alt="E logo" />
            </span>
            <span>
                <img id="n" src={logo5} alt="V logo" />
            </span>
            <span>
                <img id="g" src={logo6} alt="I logo" />
            </span>
            <span>
                <img id="g" src={logo7} alt="D logo" />
            </span>
            <span>
                <img id="g" src={logo8} alt="E logo" />
            </span>
            <span>
                <img id="g" src={logo9} alt="R logo" />
            </span>
        </div>
    )
}

export default LogoWrap;
