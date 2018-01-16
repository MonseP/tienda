import React from 'react';
import './Contacto.css';
import Nav from '../nav/Nav';
import FontAwesome from 'react-fontawesome';

export const ContactoDisplay = () => {

    return (
            <div className="contacto">
                {/*<div className="contacto_img">*/}
                    {/*<div  className="cover">*/}
                        {/*<Nav />*/}
                        {/*<h2>Contactanos</h2>*/}
                        {/*<p>Te responderemos lo antes posible</p>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*<div className="datos_contacto">*/}
                    {/*<div className="phone">*/}
                        {/*<FontAwesome name="mobile " size="5x"/>*/}
                        {/*<h4>Télefono</h4>*/}
                        {/*<p>775 777 7777</p>*/}
                        {/*<p>442 678 7678</p>*/}
                    {/*</div>*/}
                    {/*<div className="adress">*/}
                        {/*<FontAwesome name="map-marker " size="5x"/>*/}
                        {/*<h4>Dirección</h4>*/}
                        {/*<p>Mascota #45</p>*/}
                        {/*<p>Guadalajara, Jaliso</p>*/}
                    {/*</div>*/}
                    {/*<div className="service">*/}
                        {/*<FontAwesome name="clock-o " size="5x"/>*/}
                        {/*<h4>Servcio</h4>*/}
                        {/*<p>Lunes-Sábado</p>*/}
                        {/*<p>9:00 - 18:00</p>*/}
                    {/*</div>*/}
                {/*</div>*/}
                <div className="formu">
                    <h2 className="titulo"> Contacto</h2>
                    <hr className="line_blue"/>
                    <div className="contact_flex">

                        <div className="ctbox">
                            <form>
                                <input type="text" placeholder="Nombre"/>
                                <input type="text" placeholder="E-mail"/>
                                <textarea type="text" placeholder="Mnesaje"/>
                                <button className="btn_form">Enviar</button>
                            </form>
                        </div>
                        <div className="ctbox">
                            <h3>Siguenos en</h3>
                            <div className="redes">
                                <FontAwesome name="facebook" size="2x"/>
                                <FontAwesome name="google-plus" size="2x"/>
                                <FontAwesome name="instagram" size="2x"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
}