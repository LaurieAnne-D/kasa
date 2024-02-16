import "./navbar.css";
import logo from "../../assets/logo/logo.svg";

const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="Logo de Kasa" className="logo" />
            <ul>
                <li>
                    Accueil
                </li>
                <li>
                    A Propos
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;