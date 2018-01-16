import React, { Component } from 'react';
import './Home.css';
import {AboutDisplay} from './AboutDisplay';
import Product from '../product/Product';
import Nav from '../nav/Nav';
import {PubliDisplay} from './PubliDisplay';
import Contacto from '../../components/contacto/Contacto';
import Footer from '../footer/Footer';
import logo from '../../assets/tienda_logo_blanco.png';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
class HomeDisplay extends Component {

    render() {
    return (
            <div>
                <div className="home_back">


                        <div className="home_data">
                            <img src={logo} alt=""/>
                            <h3>WELLNES SYSTEM FOOD INNOVATION</h3>
                            <hr className="line_white"/>
                            <p>PRODUCTOS INTELIGENTES PARA TU BIENESTAR</p>
                            <button className="btn_home">Nosotros</button>
                            <br/>
                            <Link to="/">
                                <FontAwesome  className="fa_home" name="chevron-down" />
                            </Link>
                        </div>

                </div>
                <Nav />
                <AboutDisplay />
                <Product />
                <PubliDisplay />
                <Contacto />
                <Footer />
            </div>
        );
    }
}

export  default HomeDisplay;