import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="inscript">
                    <h3>Recbir más información</h3>
                    <hr/>
                    <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
                    </p>
                    <input type="text" placeholder="E-mail"/>
                    <button className="btn_enviar">Enviar</button>
                    <hr/>
                </div>
                <div className="redes">
                    <FontAwesome name="facebook" size="2x"/>
                    <FontAwesome name="google-plus" size="2x"/>
                    <FontAwesome name="instagram" size="2x"/>
                </div>
                <div className="footer_section">
                    <p>About</p>
                    <p>Contact</p>
                    <p>Administrador</p>
                    <p>Derechos Reservados</p>
                </div>
            </div>
        );
    }
}

export default Footer;