import React, { Component } from 'react';
import './Carrito.css';
import Nav from '../nav/Nav';
import Carrito from './Carrito.js';



class CarritoHome extends React.Component {

  render() {
    return (


      <div>


<Nav/>

      <div className="perfil-contenedor">
        <Carrito/>


      </div>
       </div>
    );
  }
}

export default CarritoHome;
