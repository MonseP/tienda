import React from 'react';
import './Home.css';
import { Parallax } from 'react-scroll-parallax';
import logo_azul from '../../assets/logo_prana_verde.png';

export const HistoryDisplay = () => {

    return (
        <div className="history">

                <div className="" style={{display:"flex", marginBottom:"100px"}}>
                    <Parallax
                        className="custom-class"
                        offsetXMax={40}
                        offsetxMin={-20}
                        slowerScrollRate
                        tag="figure"
                    >
                        <img  className="logo_history" src={logo_azul} alt=""/>
                    </Parallax>
                    <Parallax
                        className="custom-class"
                        offsetXMax={-40}
                        offsetxMin={70}
                        slowerScrollRate
                        tag="figure"
                    >
                    <div className="card_history">
                        <h3>Prana</h3>
                        <p>Somos expertos en nutrición y en la generación de sistemas de cambio
                            <br/>
                            <br/>
                            Myriad is a diverse selection of upholstered modular furniture,
                            completely flexible and reconfigurable. The range is made up of
                            eleven linkable seating units, three privacy screens, side tables
                            and arms that accommodate power.
                            <br/>
                            <br/>
                            You become the designer with Myriad, arranging modules to create
                            any shape you desire. And, if you need help, our team is always
                            on hand with suggestions to style your space.
                        </p>
                    </div>
                    </Parallax>
                </div>
            <div className="" style={{display:"flex"}}>
                <Parallax
                    className="custom-class"
                    offsetXMax={170}
                    offsetxMin={-100}
                    slowerScrollRate
                    tag="figure"
                >
                    <img  className="coffe_img" src='https://images-na.ssl-images-amazon.com/images/I/61ZOyoMYhvL._SL1000_.jpg' alt=""/>
                </Parallax>
                <Parallax
                    className="custom-class"
                    offsetXMax={-140}
                    offsetxMin={150}
                    slowerScrollRate
                    tag="figure"
                >
                    <div className="card_history">
                        <h3>Prana</h3>
                        <p>With the increasing need for your furniture to be flexible,
                            Myriad allows you to create a comfortable meeting area,
                            private huddle space or a stunning island. The opportunities
                            are truly infinite with this versatile range.
                            <br/>
                            <br/>
                            Myriad is a diverse selection of upholstered modular furniture,
                            completely flexible and reconfigurable. The range is made up of
                            eleven linkable seating units, three privacy screens, side tables
                            and arms that accommodate power.


                        </p>
                    </div>
                </Parallax>


            </div>



        </div>
    );
}
