// Rental.js
import React from 'react';
import data from "../../data/logements.json";
import Carousel from "../../components/Carousel/Carousel";
import Tags from "../../components/Tags/Tags";
import redStar from "../../assets/icons/redStar.svg";
import greyStar from "../../assets/icons/greyStar.svg";
import Collapse from "../../components/Collapse/Collapse";
import { useParams } from "react-router-dom";

export default function Rental() {
    const { id } = useParams();
    const logement = data.find(item => item.id === id);
    if (!logement) {
        return <div>No logement found for the provided ID</div>;
    }

    const { pictures, title, tags } = logement;

    const collapseItems = [
        { title: 'Description', content: logement.description },
        { title: 'Équipements', content: logement.equipments },]

    return (
        <main>
            <header>
                <Carousel pictures={pictures} title={title} />
                <h1>{title}</h1>
                <p className="location">{logement.location}</p>
            </header>
            <section className="host">
                <figure> 
                    <img src={logement.host.picture} alt={logement.host.name} />
                    <figcaption>
                        <p>{logement.host.name}</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={redStar} alt="" />
                    <img src={greyStar} alt="" />
                </figure>
                <Tags tags={tags} />
            </section>
            <section className='description'>
                <ul className="collapse-list">
                    {collapseItems.map((item, index) => (
                        <Collapse key={index} title={item.title} content={item.content} />
                    ))}
                </ul>
            </section>
        </main>
    );
}

