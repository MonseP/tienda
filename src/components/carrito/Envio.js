import React, { Component } from 'react';
import '.././perfil/Perfil.css';


class PerfilDatos extends React.Component {

  render() {



    return (

      <div>
        <div className="form-perfil-direccion">

          <h3>Agregue su dirección particular</h3>
          <br/>
              <form  className="form-direccion" >
                <label for="fname">Nombre del Responsable</label>
                <input type="text" placeholder="Nombre" />
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
      <br/>
                   <button type="button">Agregar dirección</button>



              </form>
        </div>
       </div>


    );
  }
}

export default PerfilDatos;
