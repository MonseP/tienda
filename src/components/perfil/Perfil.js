import React, { Component } from 'react';
import Nav from '../nav/Nav';
import SubMenu from './SubMenu.js';
import PerfilDatos from './PerfilDatos';



class Perfil extends React.Component {

  render() {
    return (


      <div>


<Nav/>

      <div >
        <SubMenu/>

          <PerfilDatos/>


      </div>
       </div>
    );
  }
}

export default Perfil;
