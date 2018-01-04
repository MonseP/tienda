import React from 'react';
import FontAwesome from 'react-fontawesome';
import Nav from '../nav/Nav';
import './Login.css';

export const LoginDisplay = ({mostrar, toggleMostrar, saveInput, onSubmit, error, changeRegistro}) => (
            <div className="login">
                <div className="box_navbar" style={{color:"black"}}>
                    <Nav />
                </div>
                <div className="card_login">
                    <h3>Iniciar sesión</h3>
                    <h1>{error}</h1>
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
                        <form onSubmit={onSubmit}>
                            <p>Tu email</p>
                            <input className="input" name="email" onChange={saveInput} type="text" placeholder=""/>
                            <br/>
                            <p>Tu contrasena</p>
                            <input className="input" name="password" onChange={saveInput} type="password"/>
                            <p className="ayuda">Has olvidado tu contrasena?</p>
                            <button type="submit" className="btn_login">Iniciar sesión</button>
                        </form>
                    </div>
                    <p className="ayuda"><a onClick={changeRegistro} href="#!">Crear una cuenta</a></p>

                </div>
            </div>
        );
