import React, { Component } from 'react';
import FormPago from './FormPago';
import './Carrito.css';
class Pago extends React.Component {

  render() {
    return (





        <div className="select-pago-titulo">
<h1>Selecciona tu forma de pago </h1>

<div  className="select-pago">
<button>  <img   src="https://icon-icons.com/icons2/1320/PNG/128/-mastercard_86833.png" alt=""/>
</button>


<button> <img src="https://image.flaticon.com/icons/png/128/368/368450.png" alt=""/>
</button>

<button> <img src="http://icons.iconarchive.com/icons/designbolts/credit-card-payment/128/Paypal-icon.png" alt=""/>
</button>
        </div>

        <div className= "select-pago-datos">
          <br/>

<h3> Datos de la tarjeta</h3>
<br/>

<FormPago/>



        </div>


       </div>
    );
  }
}

export default Pago;
