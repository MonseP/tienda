import React, { Component } from 'react';
import './Cart.css';
import {Link} from 'react-router-dom';
import {CartDisplay} from './CartDisplay';

class Nav extends Component {
    render() {
        return (

                <CartDisplay />

        );
    }
}

export default Nav;