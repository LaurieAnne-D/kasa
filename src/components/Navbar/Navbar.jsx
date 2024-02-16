import * as React from "react";
import "./navbar.css";
import logo from "../../assets/logo/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="Logo de Kasa" />
            <ul>
                <li>
                    <Link to="/" >Accueil</Link>
                </li>
                <li>
                    <Link to="/about">A propos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;