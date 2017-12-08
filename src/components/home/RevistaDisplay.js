import React, { Component } from 'react';
import './Home.css';

export const RevistaDisplay = () => {

    return (
        <div className="revista">
            <div className="rev_fl">
                <div className="box_rev ">
                    <div className="rev_img">

                    </div>
                </div>
                <div className="box_rev rev_text">
                    <h2 className="title">Porque consumir productos órganicos?</h2>
                    <br/>
                    <p className="parrafo">el consumo de productos orgánicos es beneficioso para la salud: sin el uso
                        de productos químicos como pesticidas, hormonas de crecimiento y otras sustancias
                        artificiales, los alimentos crecen de la forma más natural posible sin generar
                        cambios en la tierra y, por supuesto, daños ambientales a corto y largo plazo.</p>
                </div>
            </div>
        </div>
    );
}
