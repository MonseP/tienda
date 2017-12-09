import React, { Component } from 'react';
import './Product.css';
import Nav  from '../nav/Nav';
import FontAwesome from 'react-fontawesome';

export const ProductDetailDisplay = () => {

    return (
        <div className="detalle">
            <Nav />
            <div className="box_detail">
                <div className="detail">
                    <div className="img_product">
                        <div className="box_im">
                            <img src="https://images.pexels.com/photos/9784/honey-makro.jpg?h=350&dpr=2&auto=compress&cs=tinysrgb" alt=""/>
                        </div>
                        <div className="box_mini_img">
                            <img src="https://images.pexels.com/photos/9784/honey-makro.jpg?h=350&dpr=2&auto=compress&cs=tinysrgb" alt=""/>
                            <img src="https://images.pexels.com/photos/9784/honey-makro.jpg?h=350&dpr=2&auto=compress&cs=tinysrgb" alt=""/>
                            <img src="https://images.pexels.com/photos/9784/honey-makro.jpg?h=350&dpr=2&auto=compress&cs=tinysrgb" alt=""/>
                            <img src="https://images.pexels.com/photos/9784/honey-makro.jpg?h=350&dpr=2&auto=compress&cs=tinysrgb" alt=""/>

                        </div>
                    </div>
                    <div className="descript_product">
                        <h3 className="descript_name">Miel órganica de abeja </h3>
                        <p className="descript_data">Pour over is a traditional Japanese method of making coffee. Slowly pouring the water
                            by hand over your coffee grinds results in the extraction of more flavour. This is
                            the JM&Sons take on the pour over coffee stand, handcrafted and built with our
                            one-of-a-kind, salvaged barn wood. And for those who are new to making pour over coffee
                            drip, here's 5 Step To The Perfect Pour Over and additional tips on making the perfect
                            pour over brew. </p>
                       <div className="box_price">
                        <p className="descript_price">$250.00 MXN</p>
                       </div>
                        <button className="btn_agregar">Agregar</button>
                    </div>

                </div>
            </div>
        </div>
    );
}
