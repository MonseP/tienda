import React from 'react';
import './Home.css';
import img from '../../assets/logo_prana_rgb-06.png';

export const PubliDisplay = () => {

    return (
        <div className="publi">
            <h2 bot>Gracias a nuestros clientes</h2>
            <div className="bflex">
                <div className="partner bot">
                    <img  src={img} alt=""/>
                </div>
                <div className="partner bot">
                    <img  src={img} alt=""/>
                </div>
                <div className="partner bot">
                    <img  src={img} alt=""/>
                </div>

            </div>
        </div>
    );
}
