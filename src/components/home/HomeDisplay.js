import React, { Component } from 'react';
import './Home.css';
import {AboutDisplay} from './AboutDisplay';
import {DestacadosDisplay} from './DestacadosDisplay';
import Nav from '../nav/Nav';
import {PubliDisplay} from './PubliDisplay';
import {InfoDisplay} from './InfoDisplay';
import {RevistaDisplay} from './RevistaDisplay';
import Footer from '../footer/Footer';

class HomeDisplay extends Component {

    render() {
    return (
            <div>
                <div className="home_back">
                    <div id='cubrir' className="cover ">
                        <Nav />
                        <h1>Línea órganica</h1>
                        <p>Nueva colección de productos órganicos</p>
                    </div>
                </div>
                <AboutDisplay />
                <DestacadosDisplay />
                <PubliDisplay />
                <InfoDisplay />
                <RevistaDisplay />
                <Footer />
            </div>
        );
    }
}

export  default HomeDisplay;