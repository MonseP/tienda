import React, { Component } from 'react';
import './Cart.css';
import {Link} from 'react-router-dom';


export const CartDisplay = () => {

    return (
        <div className="cart">
            <Link to="/detail" style={{color:"inherit"}}>
            <div className="cart_img ">
                <img  src="https://images.pexels.com/photos/9784/honey-makro.jpg?h=350&dpr=2&auto=compress&cs=tinysrgb" alt=""/>
            </div>
            <p className="name_product">Miel de abeja</p>
            <p className="apear">$250.00</p>
            </Link>
        </div>
    );
}