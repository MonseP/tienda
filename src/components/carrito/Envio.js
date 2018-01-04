import React, { Component } from 'react';
import './Carrito.css';


class PerfilDatos extends React.Component {

  render() {



    return (


      <div  className= "form-envio">

        <h3>Ingrese sus datos para el envío</h3>
        <form>
        <ul>
        <li>
          <label className="titulo" for="nombre">Nombre y apellidos</label>

          <div className="controles">
            <span className="completo">
              <input id="nombre" name="nombre"  placeholder="Nombre"/>

            </span>

            <span className="completo">
              <input id="apellido1" name="apellido1"  placeholder="Apellido Materno"  />

            </span>

            <span className="completo">
              <input id="apellido2" name="apellido2" placeholder="Apellido paterno" />

            </span>
          </div>
        </li>

        <li>
          <label className="titulo" for="direccion">Dirección</label>

          <div className="controles">
            <span className="completo">
              <input id="direccion" name="direccion" placeholder="Calle, número, piso, puerta" />

            </span>





            <span className="dostercios">
              <input id="municipio" name="municipio"  placeholder="Municipio"/>

            </span>

            <span className="dostercios">

              <input id="pais" name="pais"  placeholder="País"/>

            </span>


            <span className="tercio">
              <input id="codigopostal" name="codigopostal" placeholder="C.P"  />

            </span>

            <span className="dostercios">



            </span>
          </div>
        </li>

        <li>
          <label className="titulo" for="email">Email</label>

          <div className="controles">
            <span className="completo">
              <input id="email" name="email" placeholder="Email" />
            </span>
          </div>
        </li>

        <li>
          <label className="titulo" for="telefonofijo">Teléfono</label>

          <div className="controles">
            <span className="mitad">
              <input id="telefonofijo" name="telefonofijo" placeholder="Lada" />

            </span>

            <span className="mitad">
              <input id="telefonomovil" name="telefonomovil" placeholder="Teléfono" />

            </span>
          </div>
        </li>



          <input id="alta" type="submit" value="Aceptar" />


        </ul>
        </form>
</div>




    );
  }
}

export default PerfilDatos;
