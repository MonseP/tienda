import React, { Component } from 'react';
import './Product.css';
import FontAwesome from 'react-fontawesome';
import Cart from '../cart/Cart';
import Nav from '../nav/Nav';

export const ProductListDisplay = () => {

    return (
        <div className="productos">
            <div className="fijo">
                <div className="box_navbar" style={{color:"black"}}>
                    <Nav />
                </div>
                <div className="encabezado">
                    <h2>Productos</h2>
                    <span><input type="text" className="search" placeholder="Buscar"/><FontAwesome className="icon_search" name='search' /></span>
                </div>
            </div>
            <div className="fl">

                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
            </div>
        </div>
    );
}
