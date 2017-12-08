import React, { Component } from 'react';
import './Home.css';
import {AboutDisplay} from './AboutDisplay';
import {DestacadosDisplay} from './DestacadosDisplay';
import Nav from '../nav/Nav';
import {PubliDisplay} from './PubliDisplay';
import {InfoDisplay} from './InfoDisplay';
import {RevistaDisplay} from './RevistaDisplay';
import Footer from '../footer/Footer';

export const HomeDisplay = () => {

        return (
            <div>
                <div className="home_back">
                    <div className="cover">
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
