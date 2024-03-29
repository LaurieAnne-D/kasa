import React from 'react';
import data from "../../data/logements.json";
import Carousel from "../../components/Carousel/Carousel";
import Tags from "../../components/Tags/Tags";
import redStar from "../../assets/icons/redStar.svg";
import greyStar from "../../assets/icons/greyStar.svg";
import Collapse from "../../components/Collapse/Collapse";
import { useParams } from "react-router-dom";
import Error from "../Error/Error";
import "./rental.css";


export default function Rental() {
    const { id } = useParams();
    const logement = data.find(item => item.id === id);
    if (!logement) {
        return <Error />;
    }
        const { pictures, title, tags, rating } = logement;

        const collapseItems = [
            { title: 'Description', content: logement.description },
            { title: 'Équipements', content: logement.equipments },]

        const renderStars = (rating) => {
            const stars = [];
            for (let i = 1; i <= 5; i++) {
                if (i <= rating) {
                    stars.push(<img key={i} src={redStar} alt="red star" />);
                } else {
                    stars.push(<img key={i} src={greyStar} alt="grey star" />);
                }
            }
            return stars;
        };

        return (
            <main className="rental">
                <header className="rental-header">
                    <Carousel pictures={pictures} title={title} />

                    <div className="direction">
                        <section>
                            <h1>{title}</h1>
                            <p className="location">{logement.location}</p>
                            <Tags tags={tags} />
                        </section>

                        <section className="host">
                            <figure className='stars'>
                                {renderStars(rating)}
                            </figure>
                            <figure>
                                <figcaption>
                                    {logement.host.name}
                                </figcaption>
                                <img src={logement.host.picture} alt={logement.host.name} />
                            </figure>
                        </section>
                    </div>
                </header>

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

