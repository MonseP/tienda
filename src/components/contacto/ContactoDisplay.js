import React from 'react';
import './Contacto.css';
import Nav from '../nav/Nav';
import FontAwesome from 'react-fontawesome';


export const ContactoDisplay = () => {

    return (
            <div className="contacto">

                <div className="formu">
                    <h2 className="titulo bot"> Contacto</h2>
                    <hr className="line_blue right"/>
                    <div className="contact_flex">

                        <div className="ctbox left">
                            <form>
                                <input type="text" placeholder="Nombre"/>
                                <input type="text" placeholder="E-mail"/>
                                <textarea type="text" placeholder="Mnesaje"/>
                                <button className="btn_form">Enviar</button>
                            </form>
                        </div>
                        <div className="ctbox right">
                            <h3>Siguenos en</h3>
                            <div className="redes">
                                <FontAwesome name="facebook" size="2x"/>
                                <FontAwesome name="google-plus" size="2x"/>
                                <FontAwesome name="instagram" size="2x"/>
                                <FontAwesome name="dribbble" size="2x"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
}