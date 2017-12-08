import React, { Component } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="img_logo">
                   <Link to="/" >
                        <span>Logo</span>
                   </Link>
                </div>
                <div className="pestanas">
                    <Link to="/catalogo" >
                        <span>Catálogo</span>
                    </Link>
                    <Link to="/contacto">
                        <span>Contacto</span>
                    </Link>
                    <Link to="/login" >
                        <span>Login</span>
                    </Link>
                </div>

            </div>
        );
    }
}

export default Nav;