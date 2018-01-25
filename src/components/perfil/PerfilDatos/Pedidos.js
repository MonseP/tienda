import React, { Component } from 'react';
import Nav from '../../nav/Nav';
import '../Perfil.css';
import SubMenu from '../SubMenu.js';
import User from '../User.js';
import PerfilPedidos from './PerfilPedidos.js';



class Pedidos extends React.Component {

  render() {
    return (


      <div>


<Nav/>

      <div >
        <SubMenu/>

          <User/>
<div className="pedidos-table">
          <PerfilPedidos/>
 </div>

      </div>
       </div>
    );
  }
}

export default Pedidos;
