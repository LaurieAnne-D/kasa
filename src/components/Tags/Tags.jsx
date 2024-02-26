import React from "react";
import "./tags.css";
const Tags = ({ tags }) => {
    return (
        <ul className="tags">
            {tags.map((tags, index) => (
                <li key={index}>
                    <p>{tags}</p>
                </li>
            ))}
        </ul>
    );
};

export default Tags;