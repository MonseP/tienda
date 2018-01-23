import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './Footer.css';
import img from '../../assets/logo_prana_rgb-06.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <img src={img} alt=""/>
                <div className="footer_section">
                    <p>Home</p>
                    <p>Provacity Policy</p>
                    <p>Facebook</p>
                    <p>Dribble</p>
                    <p>Twitter</p>
                    <p>Contact</p>
                </div>
            </div>
        );
    }
}

export default Footer;