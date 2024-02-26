import React, { useState } from "react";
import arrowLeft from "../../assets/icons/arrowLeft.svg";
import arrowRight from "../../assets/icons/arrowRight.svg";
import "./carousel.css";

const Carousel = ({ pictures, title }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

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