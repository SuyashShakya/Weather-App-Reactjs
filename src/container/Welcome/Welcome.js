import React from 'react';
import loadingBackground from '../../assets/loadingBackground.jpg';

const Welcome = () => {
    return (
        <div style={{ backgroundImage: `url(${loadingBackground})`, height: 700 }}>
            <center><p style={{ fontSize: 40, fontWeight: 'bold', color: 'white' }}> Welcome to the Weather Application</p></center>
            <center>Loading&nbsp;&nbsp;
                <div className="spinner-border" style={{ height: 20, width: 20 }}></div></center>
        </div>
    )
}

export default Welcome;