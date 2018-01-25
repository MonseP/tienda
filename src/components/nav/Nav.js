import React, { Component } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import logo_gris from '../../assets/logo_prana_rgb-01.png';

class Nav extends Component {

    state = {
        isLogged:false
    };

    signOut  = () => {
        localStorage.removeItem("user");
        this.props.history.push("/login");
    };
    componentWillMount() {
        // this.handleScroll();
        // window.addEventListener('scroll', this.handleScroll);

        const user = localStorage.getItem("user");
        if (user) {
            this.setState({isLogged:true})
        }else{
            this.setState({isLogged:false})
        }
    }




    render() {
        const { isLogged} = this.state;
        return (

            <div className="nav">
                <div className="img_logo">
                    <img src={logo_gris} alt=""/>
                </div>
                <div className="pestanas">
                    <Link to="/" >
                        <span>Productos</span>
                    </Link>
                    <Link to="/" >
                        <span>Contacto</span>
                    </Link>
                    {!isLogged ? <Link to="/login" >
                        <span>Login</span>
                    </Link>: <button onClick={this.signOut} className="close" >Cerrar sesión</button>}
                </div>

            </div>
        );
    }
}

export default withRouter(Nav);