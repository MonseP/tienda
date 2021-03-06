import React, { Component } from 'react';
import {LoginDisplay} from './LoginDisplay';
import {Registro} from './Registro'
import './Login.css';
import firebase from '../../firebase';

class LoginContainer extends Component {
    state= {
        mostrar:false,
        login:{
            email: null,
            password: null
        },
        error: null,
        registro: false,
        nuevoRegistro: {
            email:null,
            pass:null,
            pass2:null
        }

    };

    componentWillMount(){
        const user = localStorage.getItem("user");
        if(user){
            this.props.history.push("/perfil");
        }
    };

    toggleMostrar = () => {
        this.setState({mostrar:!this.state.mostrar});
    };

    saveInput = (e) => {
        const input = e.target.name;
        const value = e.target.value;
        const login = this.state.login;
        login[input] = value;
        this.setState({login});
        // console.log(login);
    };
    saveRegistro = (e) => {
        const input = e.target.name;
        const value = e.target.value;
        const nuevoRegistro = this.state.nuevoRegistro;
        nuevoRegistro[input] = value;
        this.setState({nuevoRegistro});
        // console.log(login);
        if(nuevoRegistro.pass !== nuevoRegistro.pass2)
            this.setState({error:"tu contrasena no coincide"});
        else
            this.setState({error:null});
    };

    onLogin = (e) => {
        e.preventDefault();
        const {login} = this.state;
        firebase.auth()
            .signInWithEmailAndPassword(login.email, login.password)
            .then(usuario=>{
                let user = JSON.stringify(usuario);
                localStorage.setItem("user", user);
                this.props.history.push("/perfil");
            })
            .catch(e=>console.log(e));

    }


    changeRegistro = () => {
        this.setState({registro:true});
    };

    createUser = (e) => {
        e.preventDefault();
        const {nuevoRegistro} = this.state;
        firebase.auth()
            .createUserWithEmailAndPassword(nuevoRegistro.email, nuevoRegistro.pass)
            .then(s=>{
                this.setState({registro:false});
            })
            .catch(e=>console.log(e));
    };
    render() {
        const {registro, nuevoRegistro} = this.state;
        return (
            <div>
                {registro ?
                    <Registro
                        toggleMostrar = {this.toggleMostrar}
                        mostrar={this.state.mostrar}
                        saveRegistro = {this.saveRegistro}
                        error = {this.state.error}
                        onSubmit = {this.createUser}
                        {...nuevoRegistro}
                    />
                    :
                    <LoginDisplay
                        changeRegistro={this.changeRegistro}
                        mostrar={this.state.mostrar}
                        toggleMostrar = {this.toggleMostrar}
                        saveEmail = {this.saveEmail}
                        savePass = {this.savePass}
                        saveInput = {this.saveInput}
                        onSubmit = {this.onLogin}
                        error = {this.state.error}
                    />

                }
            </div>
        );
    }
}

export default LoginContainer;