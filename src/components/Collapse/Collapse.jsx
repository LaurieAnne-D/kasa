import React, { useState } from 'react';
import './collapse.css';
import informationsData from '../../data/informations.json';
import arrowBack from '../../assets/icons/arrowBack.svg';

const informations = informationsData;

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main>
            <li>
                <figure className='collapse' onClick={() => setIsOpen(!isOpen)}>
                    <img src={arrowBack} alt={title} />
                    <figcaption>
                        <h3>{title}</h3>
                        {isOpen && <p>{content}</p>}
                    </figcaption>
                </figure>
            </li>
        </main>
    );
};

function CollapseContainer() {
    return (
        <ul>
            {informations.map(information => (
                <Collapse
                    key={information.title}
                    title={information.title}
                    content={information.content}
                />
            ))}
        </ul>
    );
}

export default CollapseContainer;