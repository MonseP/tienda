import React, { Component } from 'react';
import './Carrito.css';
import Nav from '../nav/Nav';
import Carrito from './Carrito.js';



class CarritoHome extends React.Component {

  render() {
    return (


      <div className="carrito">
    <body>

<Nav/>
<div >

  <div className="home-pago">
<h2> Carrito de compras</h2>


  </div>


<div className="back-home-pago"> 
</div>
      <div className="carrito-contenedor">





        <Carrito/>


      </div>
    </div>
    </body>
       </div>
    );
  }
}

export default CarritoHome;
