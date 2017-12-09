import React, { Component } from 'react';
import './Contacto.css';
import Nav from '../nav/Nav';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

export const ContactoDisplay = () => {

    return (
            <div className="contacto">
                <div className="contacto_img">
                    <div id="cubrir" className="cover">
                        <Nav />
                        <h2>Contactanos</h2>
                        <p>Te responderemos lo antes posible</p>
                    </div>
                </div>
                <div className="datos_contacto">
                    <div className="phone">
                        <FontAwesome name="mobile " size="5x"/>
                        <h4>Télefono</h4>
                        <p>775 777 7777</p>
                        <p>442 678 7678</p>
                    </div>
                    <div className="adress">
                        <FontAwesome name="map-marker " size="5x"/>
                        <h4>Dirección</h4>
                        <p>Mascota #45</p>
                        <p>Guadalajara, Jaliso</p>
                    </div>
                    <div className="service">
                        <FontAwesome name="clock-o " size="5x"/>
                        <h4>Servcio</h4>
                        <p>Lunes-Sábado</p>
                        <p>9:00 - 18:00</p>
                    </div>
                </div>
                <div className="formu">
                    <h3>Formulario de Contacto</h3>
                    <form>
                        <input type="text" placeholder="Nombre"/>
                        <input type="text" placeholder="E-mail"/>
                        <textarea type="text" placeholder="Mnesaje"/>
                        <button className="btn_form">Enviar</button>
                    </form>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14944.998238143371!2d-104.7977181!3d20.5369676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x21e6ad44c7fd5ee5!2sRancho+La+Esmeralda!5e0!3m2!1ses-419!2smx!4v1512777419294" style={{width:"100%",height:"370px", border:0 }}   frameborder="0"  ></iframe>
                </div>


            </div>
    );
}