import React from 'react';
import "./cards.css";
import data from "../../data/logements.json";
import { Link } from "react-router-dom";

const logements = data;

function Card({id, title, cover }) {
    return (
        <Link to={`/rental/${id}`} className="card-link">
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
                    id={logement.id}
                    title={logement.title}
                    cover={logement.cover}
                />
            ))}
        </article>
    );
}

export default CardContainer;
