import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="card_login">
                    <h3>Iniciar sesión</h3>
                    <div className="redes_login">
                        <div className="circle_f">
                            <FontAwesome name="facebook" size="2x"/>
                        </div>
                        <div className="circle_g">
                            <FontAwesome name="google" size="2x"/>
                        </div>
                    </div>
                    <hr className="line_log"/>
                    <div className="log_email">
                        <p>Tu email</p>
                        <input type="text" placeholder=""/>
                        <br/>
                        <br/>
                        <p>Tu contrasena</p>
                        <input type="text"/>
                        <p className="ayuda">Has olvidado tu contrasena?</p>
                        <button className="btn_login">Iniciar sesión</button>
                    </div>
                    <p className="ayuda">Crea una cuenta</p>
                </div>
            </div>
        );
    }
}

export default Login;