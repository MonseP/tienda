import React from 'react';
import './Home.css';
import img from '../../assets/logo_prana_rgb-06.png';
import FontAwesome from 'react-fontawesome';
import { Parallax } from 'react-scroll-parallax';

export const PubliDisplay = () => {

    return (

            <div className="box_publi">

                    <div className="publi ">
                        <h3>Recibe noticias y promociones especiales</h3>
                        <div className="div_input">
                            <input className="inp" type="text" placeholder="E-mail"/>
                            <span><FontAwesome name="paper-plane"/></span>
                        </div>
                     </div>

            </div>

    );
}
