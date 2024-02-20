import * as React from "react";
import "./footer.css";
import logowhite from "../../assets/logo/logoWhite.svg";

const Footer = () => {
    return (
        <footer>
            <figure>
                <img src={logowhite} alt="Logo de Kasa" className="logo" />
                <figcaption> <p>© 2020 Kasa. All</p> <p>rights reserved</p> </figcaption>
            </figure>
        </footer>
    );
};

export default Footer;
