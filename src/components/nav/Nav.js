import React, { Component } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class Nav extends Component {

    state = {
      top:true,
        isLogged:false
    };

    signOut  = () => {
        localStorage.removeItem("user");
        this.props.history.push("/login");
    };
    componentWillMount() {
        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll);

        const user = localStorage.getItem("user");
        if (user) {
            this.setState({isLogged:true})
        }else{
            this.setState({isLogged:false})
        }
    }
    handleScroll = () => {
        const pathName = this.props.location.pathname;
        console.log(pathName);
        if(window.scrollY > 700 && pathName === '/' ) {
            this.setState({top: false});
        } else if(pathName !== '/'){
            this.setState({top:false});
        } else{
            this.setState({top:true})
        }
        };



    render() {
        const {top, isLogged} = this.state;
        return (

            <div ref={div=>this.div = div} id='navbar' className={top ? "nav":"nav color"}>
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
                    {!isLogged ? <Link to="/login" >
                        <span>Login</span>
                    </Link>: <button onClick={this.signOut} className="close" >Cerrar sesión</button>}
                </div>

            </div>
        );
    }
}

export default withRouter(Nav);