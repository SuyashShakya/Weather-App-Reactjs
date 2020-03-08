import React from 'react';
import buttonBackground from '../assets/buttonBackground.jpg';

const Card = (props) => {
    const { temp, date, onClick, key } = props;
    return (
        <div key={key}>
            <button style={{ width: 200, height: 200, borderRadius: 10, margin: 5, backgroundImage: `url(${buttonBackground})`}}
                onClick={onClick}
                
            >
                <p class="card-text" style={{color:'white'}}>Average Temperature:</p>
                <p class="card-text" style={{color:'white'}}>{temp}</p>
                <p class="card-text" style={{color:'white'}}>Date:</p>
                <p class="card-text" style={{color:'white'}}>{date}</p>
            </button>
        </div>
    )
}

export default Card;