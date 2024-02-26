// Rental.js
import React from 'react';
import Carousel from "../../components/Carousel/Carousel";
import Tags from "../../components/Tags/Tags";
import { useParams } from "react-router-dom";

export default function Rental() {
    const { id } = useParams();

    return (
        <main>
            <Carousel logementId={id} />
            <Tags logementId={id} />
        </main>
    );
}