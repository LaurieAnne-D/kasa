// Rental.js
import React from 'react';
import data from "../../data/logements.json";
import Carousel from "../../components/Carousel/Carousel";
import Tags from "../../components/Tags/Tags";
import { useParams } from "react-router-dom";

export default function Rental() {
    const { id } = useParams();
    const logement = data.find(item => item.id === id);
    if (!logement) {
        return <div>No logement found for the provided ID</div>;
    }

    const { pictures, title, tags } = logement;

    return (
        <main>
            <Carousel pictures={pictures} title={title} />
            <Tags tags={tags} />
        </main>
    );
}

