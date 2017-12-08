import React, { Component } from 'react';
import './Home.css';

export const AboutDisplay = () => {

    return (
        <div id="about">
            <div className="about">
                <h2 className="titulo">Sobre nosotros...</h2>
                <br/>
                <p className="texto">Porque somos apasionados por el cuidado del medio ambiente y el
                    bienestar de las personas ofreciéndoles alternativas para hacer su alimentación
                    más saludable y su estilo de vida más armónico con la naturaleza, apoyando en el
                    camino a pequeños productores
                </p>
                <br/>
                <p className="texto">Ofrecemos alimentos frescos, básicos caseros como salsas, cortidos
                    y mermeladas. También ofrecemos una gran variedad de alimentos artesanales,
                    artículos para el hogar y suplementos alimenticios.
                </p>
            </div>
        </div>
    );
}