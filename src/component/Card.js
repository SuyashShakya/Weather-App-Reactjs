import React from 'react';
import buttonBackground from '../assets/buttonBackground.jpg';

const Card = (props) => {
    const { temp1, temp2, date, onClick, key } = props;
    return (
        <div key={key} data-testid="button">
            <button style={{ width: 210, height: 230, borderRadius: 10, margin: 5, backgroundImage: `url(${buttonBackground})` }}
                onClick={onClick}
            >
                <p style={{ color: 'white' }}>Average Max Temperature:</p>
                <p style={{ color: 'white' }}>{temp1}</p>
                <p style={{ color: 'white' }}>Average Min Temperature:</p>
                <p style={{ color: 'white' }}>{temp2}</p>
                <p style={{ color: 'white' }}>Date:</p>
                <p style={{ color: 'white' }}>{date}</p>
            </button>
        </div>
    )
}

export default Card;