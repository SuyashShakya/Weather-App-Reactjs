import React, { Component } from 'react';
import loadingBackground from '../../assets/loadingBackground.jpg';

class Welcome extends Component {
    render() {
        return (
            <div style={{ backgroundImage: `url(${loadingBackground})`, height: 700 }}>
                <center><p style={{ fontSize: 40, fontWeight: 'bold', color: 'white' }}> Welcome to the Weather Application</p></center>
                <center>Loading&nbsp;&nbsp;
                <div class="spinner-border" style={{ height: 20, width: 20 }}></div></center>
            </div>
        )
    }
}

export default Welcome;