/**
 * Created by brendaortega on 31/01/18.
 */
import React, { Component } from 'react';
import './Footer.css';
import FontAwesome from 'react-fontawesome';
import img from '../../assets/logo_prana_rgb-06.png';

class FormasPago extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div style={{padding:"5% 20%", borderTop:"1px solid #f8f8f7", borderBottom:"1px solid #f8f8f7"}}>
                <h3 className="tity">Formas de Pago</h3>
                <div className="formas">
                    <div>
                        <img src="https://s3.amazonaws.com/conekta.static/business/commissions/methods_cards.png" alt=""/>
                    </div>
                    <div>
                        <p>Aplica a tarjetas locales y extranjeras.</p>
                    </div>
                    <div>
                        <img src="https://s3.amazonaws.com/conekta.static/business/commissions/methods_oxxopay.png" alt=""/>
                    </div>
                    <div>
                        <p>OXXO cobra $ 10 pesos MXN adicionales a tus clientes por pagar en caja.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormasPago;