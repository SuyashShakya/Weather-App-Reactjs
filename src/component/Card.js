import React from 'react';
import buttonBackground from '../assets/buttonBackground.jpg';

const Card = (props) => {
    const { temp, date, onClick, key } = props;
    return (
        <div key={key} data-testid="button">
            <button style={{ width: 200, height: 200, borderRadius: 10, margin: 5, backgroundImage: `url(${buttonBackground})` }}
                onClick={onClick}
            >
                <p style={{ color: 'white' }}>Average Temperature:</p>
                <p style={{ color: 'white' }}>{temp}</p>
                <p style={{ color: 'white' }}>Date:</p>
                <p style={{ color: 'white' }}>{date}</p>
            </button>
        </div>
    )
}

export default Card;