import React, { Component } from 'react';
import Nav from '../nav/Nav';
import './Check.css';



class Check extends React.Component {

  render() {

    return (

          <div>

                <Nav/>





<div className="form-check">

                    <div class="mobile">
                     <div class="credit-card">
                       <span id="card-name-display"> Visa</span>
                       <span id="card-number-display">1234-1234 </span>
                       <span id="expiration-display">09/22</span>
                     </div>

                     <div class="payment-form">
                       <form>
                        <fieldset>
                          <label for="card-name">Nombre completo de la tarjeta</label>

                          <input id="card-name" type="text"/>
                          <label for="card-number">Número de la tarjeta</label>
                          <input id="card-number" maxlength="19" minlength="13" pattern="[0-9]*" type="text" />
                          <label for="expiration">Fecha de expiración</label>

                          <input className="label-expiration" maxlength="4" minlength="4" pattern="[0-9]*" placeholder="MMYY" type="text"/>
                            <label for="security" id="sec-label">Código de seguridad </label>
                          <input className="label-expiration" maxlength="4" minlength="4" pattern="[0-9]*" placeholder="1234" type="text"/>
                        </fieldset>
                      <fieldset>


                        <label for="address">

                        <input id="address" name="address" type="checkbox" value="address" />
                        <span> Acepto términos y condiciones </span>
                         </label>
                      </fieldset>

                      <button type="submit">Aceptar</button>


                </form>


                </div>
                  </div>
                  </div>


                   </div>





    );
  }
}

export default Check;
