import React, { Component } from 'react';
import Nav from '../nav/Nav';
import SubMenu from './SubMenu.js';
import User from './User.js';
import PerfilPersonal from './PerfilPersonal.js';



class Perfil extends React.Component {

  render() {
    return (


      <div>


<Nav/>

      <div >
        <SubMenu/>

          <User/>

          <PerfilPersonal/>


      </div>
       </div>
    );
  }
}

export default Perfil;
