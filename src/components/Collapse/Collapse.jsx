import React, { useState } from 'react';
import './collapse.css';
import arrowUp from '../../assets/icons/arrowUp.svg';

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleState = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li className={`collapse ${isOpen ? 'open' : ''}`} onClick={toggleState}>
            <div>
                <h3>{title}</h3>
                <img src={arrowUp} alt={title} className={isOpen ? 'rotate' : ''} />
            </div>
            {isOpen && <p>{content}</p>}
        </li>
    );
};

export default Collapse;