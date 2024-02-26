import React from "react";
import data from "../../data/logements.json";
import "./tags.css";

const Tags = ({ logementId }) => {
    const logement = data.find(item => item.id === logementId);
    if (!logement) {
        return <div>No logement found for the provided ID</div>;
    }

    const { tags } = logement;

    return (
        <ul className="tags">
            {tags.map((tag, index) => (
                <li key={index}>
                    <p>{tag}</p>
                </li>
            ))}
        </ul>
    );
};

export default Tags;