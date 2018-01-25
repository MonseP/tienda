import React, { Component } from 'react';
import User from './User.js';
import PerfilPersonal from './PerfilPersonal.js';
import TabsMenu from './TabsMenu.js';
import Footer from '../footer/Footer.js';



class Perfil extends React.Component {

  render() {
    return (
      <div style={{background: '#ECECEC', paddingBottom:"100px"}}>
                <User/>
                <div className="box_back fle">
                    <PerfilPersonal/>
                </div>
       </div>
    );
  }
}

export default Perfil;
