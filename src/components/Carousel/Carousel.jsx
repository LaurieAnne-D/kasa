import React, { useState } from "react";
import data from "../../data/logements.json";
import arrowLeft from "../../assets/icons/arrowLeft.svg";
import arrowRight from "../../assets/icons/arrowRight.svg";
import "./carousel.css";

const Carousel = ({ logementId }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const logement = data.find(item => item.id === logementId);
    if (!logement) {
        return <div>No logement found for the provided ID</div>;
    }

    const { pictures, title, } = logement;

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % pictures.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + pictures.length) % pictures.length);
    };

    return (
        <figure className="carousel">
            <img className="slide" src={pictures[currentSlide]} alt={title} />
            <figcaption>
                <img className="left" src={arrowLeft} alt="fleche gauche" onClick={prevSlide} />
                {pictures.length > 1 && <p className="counter">{currentSlide + 1}/{pictures.length}</p>}
                <img className="right" src={arrowRight} alt="fleche droite" onClick={nextSlide} />
            </figcaption>
        </figure>
    );
};

export default Carousel;