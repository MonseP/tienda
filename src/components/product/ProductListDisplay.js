import React from 'react';
import './Product.css';
import FontAwesome from 'react-fontawesome';
import Cart from '../cart/Cart';
import Nav from '../nav/Nav';

export const ProductListDisplay = ({products}) => {

    return (
        <div className="productos">
            <h2 className="titulo">Productos</h2>
            <hr className="line_blue"/>
                <Cart />
        </div>
    );
}
