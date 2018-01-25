import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Home.css';
import { Parallax } from 'react-scroll-parallax';

export const SendDisplay = () => {

    return (
        <div className="revista">
            <Parallax
                className="custom-class"
                offsetYMax={20}
                offsetYMin={-20}
                slowerScrollRate
                tag="figure"
            >
                <div className="nos_text">
                    <h2>Hungry? Let's meet.</h2>
                    <p>Vandaag is een mooie dag om je digitale kansen te pakken. Om je
                        klanten een overweldigende merkervaring te bieden. Om je markt
                        op te schudden met nieuwe digitale business waar ook je hele
                        organisatie in gelooft. Om onderdeel te zijn van een team van
                        experts dat helemaal wordt samengesteld rond jouw vraagstuk.
                        Om met scherpte, lef en kennis je markt te gaan veroveren.
                    </p>

                </div>
            </Parallax>
            <br/>
            <br/>
            <Parallax
                className="custom-class"
                offsetYMax={20}
                offsetYMin={-20}
                slowerScrollRate
                tag="figure"
            >
            <div className="process">
                <div className="uno">
                    <FontAwesome name="paper-plane" size="2x" />
                    <br/>
                    <h3>Envío gratuito</h3>
                    <p>Más de $1,000.00</p>
                </div>
                <div className="dos">
                    <FontAwesome name="paper-plane" size="2x" />
                    <br/>
                    <h3>Envío gratuito</h3>
                    <p>Más de $1,000.00</p>
                </div>
                <div className="tres">
                    <FontAwesome name="paper-plane" size="2x" />
                    <br/>
                    <h3>Envío gratuito</h3>
                    <p>Más de $1,000.00</p>
                </div>
            </div>
            </Parallax>
        </div>
    );
}
