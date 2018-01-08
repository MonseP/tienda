import React, { Component } from 'react';
import Nav from '../nav/Nav';
import SubMenu from './SubMenu';
import User from  './User';
import './Perfil.css';




class PerfilDirecciones extends React.Component {

  render() {
    return (


      <div>

<Nav/>
<User/>
<SubMenu/>

        <div className="form-perfil-direccion">

          <h3>Agregue su dirección particular</h3>
          <br/>
              <form>
                <label for="fname">Nombre del Responsable</label>
                <input type="text" />
                <label >País</label>
                  <input type="text"  placeholder="País"/>


                  <label >Municipio</label>
                    <input type="text"  placeholder="Municipio"/>

                <label >Número interior</label>
                <input type="number" placeholder="Número interior"/>

                <label >Número exterior</label>
                <input type="number" placeholder="Número interior"/>

                        <label >Código Postal</label>
                        <input type="number" placeholder="C.P."/>

                   <button type="button">Agregar dirección</button>



              </form>
        </div>
       </div>
    );
  }
}

export default PerfilDirecciones;
