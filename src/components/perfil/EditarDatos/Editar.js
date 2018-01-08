import React, { Component } from 'react';
import Nav from '../../nav/Nav';
import SubMenu from '../SubMenu.js';
import User from '../User.js';
import '../Perfil.css';




class Editar extends React.Component {

  render() {
    return (


      <div>


        <Nav/>
          <SubMenu/>
                    <User/>




        <div className="form-personal-data">
              <form>
                <label for="fname">Nombre Completo</label> <br/>
                <input type="text" value="Montserrat Plata Torres" /> <br/>
                <label for="fname">Email</label><br/>
                <input type="text"  /><br/>
                <label for="fname">Contraseña</label><br/>
                <input type="password" /><br/>



                <label >Número de tarjeta</label> <br/>
                <input type="number"/>
<br/>
              <button> Aceptar</button>



              </form>


        </div>
       </div>
    );
  }
}

export default Editar;
