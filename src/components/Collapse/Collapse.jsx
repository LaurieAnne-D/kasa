import React, { useState } from 'react';
import './collapse.css';
import arrowDown from '../../assets/icons/arrowDown.svg';
import arrowUp from '../../assets/icons/arrowUp.svg';

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
            <li className='collapse' onClick={() => setIsOpen(!isOpen)}>
                <div>
                    <h3>{title}</h3>
                    <img src={isOpen ? arrowDown : arrowUp} alt={title} />
                </div>
                {isOpen && <p>{content}</p>}
            </li>
    );
};

export default Collapse;