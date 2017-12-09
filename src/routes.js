import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import Product from './components/product/Product';
import Login from './components/login/Login';
import Perfil from './components/perfil/Perfil';
import {ProductDetailDisplay} from './components/product/ProductDetailDisplay';
import Contacto from './components/contacto/Contacto';

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/catalogo" component={Product}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/perfil" component={Perfil}/>
        <Route exact path="/contacto" component={Contacto}/>
        <Route path="/detail" component={ProductDetailDisplay} />
        <Route render={() => <h2>Aqui  no</h2>} />

    </Switch>

);
