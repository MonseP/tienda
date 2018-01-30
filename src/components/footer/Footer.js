import React, { Component } from 'react';
import './Footer.css';
import FontAwesome from 'react-fontawesome';
import img from '../../assets/logo_prana_rgb-06.png';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="footer ">
                <div className="box_footer">
                    <div>
                        <h4>Contacto</h4>
                        <hr className="line_green"/>
                        <span><FontAwesome name="phone"/>7757609276</span>
                        <br/>
                        <span><FontAwesome name="envelope"/>prana@gmail.com</span>
                    </div>
                    <div>
                        <h4>Horario de atención</h4>
                        <hr className="line_green"/>
                        <span> <FontAwesome name="clock-o"/>Lunes a sabádo</span>
                        <br/>
                        <span>9:00 am a 6:00 pm </span>
                    </div>
                    <div>
                        <h4>Información</h4>
                        <hr className="line_green"/>
                        <span>Formas de Pago</span>
                        <br/>
                        <Link to="/politicas-de-privacidad">
                            <span>Politicas de Privacidad</span>
                        </Link>
                    </div>
                    <div>
                        <h4>Conecta con nosotros</h4>
                        <hr className="line_green"/>
                        <div className="redes">
                            <FontAwesome name="facebook-square"/>
                            <FontAwesome name="twitter-square"/>
                            <FontAwesome name="dribbble"/>
                        </div>
                    </div>
                </div>
                <br/>
                <div style={{width:"80%", margin:"0 auto", borderTop:"1px solid #f8f8f7", paddingTop:"14px"}}>
                    <p>Copyright © 2018 Prana</p>
                </div>
            </div>
        );
    }
}

export default Footer;