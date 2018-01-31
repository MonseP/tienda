import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import NavContainer from '../../nav/NavContainer';
import Footer from '../../footer/Footer';
import User from '../User.js';
import './Editar.css';




class Editar extends React.Component {

  render() {
    return (


      <div>
<NavContainer/>
                    <User/>





                          <div className="form-editar">
                            <div className="form-perfil-editar">

                              <h3>Editar sus datos </h3>
                              <br/>
                                  <form>


                                    <label>Nombre</label>
                                      <input type="text"  placeholder="Nombre"/>

                                      <label for="fname">Email</label>
                                      <input type="email" placeholder="Email" />



                          <br/>
                                       <button  id="button-acept" type="button">Guardar</button>
                                      <p> <NavLink to="/perfil"> Cancelar </NavLink></p>



                                  </form>
                            </div>
                           </div>

                            <Footer/>
                             </div>

    );
  }
}

export default Editar;
