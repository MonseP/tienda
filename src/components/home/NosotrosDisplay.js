import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';

export const NosotrosDisplay = () => {

    return (
        <div id="nosotros" className="nosotros">
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
                <p>Zullen we beginnen?</p>
                <br/>
                <Link to="/catalogo">
                    <button className="btn_explore">Explorar</button>
                </Link>
            </div>
            </Parallax>
        </div>
    );
}