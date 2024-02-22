import React, { useState } from 'react';
import './collapse.css';
import arrowBack from '../../assets/icons/arrowBack.svg';



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

export default Collapse;