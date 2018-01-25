import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Home.css';

export const SendDisplay = () => {

    return (
        <div className="revista">

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
        </div>
    );
}
