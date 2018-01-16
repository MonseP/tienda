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

                   <div className="card-image">
                   <div className="flip">

                       <img src="http://elmanana.com.mx/imgs/noticias/original/bc535087d645155_ee597558e83c18f7bf4cf6df870a430a" className="flip-1"/>
                       <img src="http://blog.i-pay.co.za/wp-content/uploads/2015/01/instant-payment-solution.png" className="flip-2"/>

                   </div>
                   </div>
</div>









                     <div class="payment-form">
                       <form>
                        <fieldset>
                          <label for="card-name">Nombre completo de la tarjeta</label>

                          <input id="card-name" type="text"/>
                          <label for="card-number">Número de cuenta</label>
                          <input id="card-number" maxlength="19" minlength="13" pattern="[0-9]*" type="text" />
                          <label for="expiration">Fecha de expiración</label>

                          <input className="label-expiration" maxlength="4" minlength="4" pattern="[0-9]*" placeholder="MMYY" type="text"/>
                            <label for="security" id="sec-label">Código de seguridad </label>
                          <input className="label-expiration" maxlength="4" minlength="4" pattern="[0-9]*" placeholder="1234" type="text"/>
                        </fieldset>
                      <fieldset>


                        <label for="address">

                        <input id="address" name="address" type="checkbox" value="address" />
                        <span> Acepto </span>
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
