import React from 'react';
import "./card.css";
import data from "../../data/logements.json";
import { Link } from "react-router-dom";

const logements = data;

function Card({ title, cover }) {
    return (
        <Link to="/" className="card-link">
            <figure className="card">
                <img src={cover} alt={title} />
                <figcaption>
                    <h3>{title}</h3>
                </figcaption>
            </figure>
        </Link>
    );
}

function CardContainer() {
    return (
        <article>
            {logements.map(logement => (
                <Card
                    key={logement.id}
                    title={logement.title}
                    cover={logement.cover}
                />
            ))}
        </article>
    );
}

export default CardContainer;
