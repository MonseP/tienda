import React, { Component } from 'react';


class FormPago extends React.Component {
  render() {
    return (
<div className="form-pago">
      <form>
        <label for="fname">Nombre del titular de la tarjeta</label>
        <input type="text" />
        <label >Número de tarjeta</label>
        <input type="number"/>
        <label >Fecha de expiración</label>
                <input type="number"/>

                <label >Número de seguridad</label>
                              <input type="number"/>

           <button type="button">Pagar</button>



      </form>
</div>
    );
  }
}


export default FormPago;
