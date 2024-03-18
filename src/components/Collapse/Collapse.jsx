import React, { useState } from 'react';
import './collapse.css';
import arrowUp from '../../assets/icons/arrowUp.svg';
import arrowDown from '../../assets/icons/arrowDown.svg';

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleState = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li className={`collapse ${isOpen ? 'open' : ''} ${title === 'Équipements' ? 'listcolumn' : ''}`} onClick={toggleState}>
            <div>
                <h3>{title}</h3>
                <img src={isOpen ? arrowDown : arrowUp} alt={title} className={isOpen ? 'rotate' : ''} />
            </div>
            {isOpen && (
                <>
                    {title !== 'Équipements' ? <p>{content}</p> : (
                        <ul>
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </li>
    );
};

export default Collapse;