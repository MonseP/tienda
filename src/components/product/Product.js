import React, { Component } from 'react';
import './Product.css';
import {ProductListDisplay} from './ProductListDisplay';

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