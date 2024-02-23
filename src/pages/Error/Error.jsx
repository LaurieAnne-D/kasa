import React from "react";
import errorImg from "../../assets/images/404error.svg";
import { Link } from "react-router-dom";
import "./error.css";

export default function Error() {
    return (
        <main className="error">
            <figure>
                <img src={errorImg} alt="error 4O4" />
                <figcaption>
                    <h1>Oups! La page que <span>vous demandez n'existe pas.</span></h1>
                    <p><Link to="/" >Retourner sur la page d’accueil</Link></p>
                </figcaption>
            </figure>
        </main>
    )
}