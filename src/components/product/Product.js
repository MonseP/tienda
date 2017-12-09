import React, { Component } from 'react';
import './Product.css';
import {ProductListDisplay} from './ProductListDisplay';
import Nav from '../nav/Nav';

class Home extends Component {
    render() {
        return (
            <div>
               <ProductListDisplay />

            </div>
        );
    }
}

export default Home;