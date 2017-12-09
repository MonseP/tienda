import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import Product from './components/product/Product';
import Login from './components/login/Login';
import Perfil from './components/perfil/Perfil';
import {ProductDetailDisplay} from './components/product/ProductDetailDisplay';
import Contacto from './components/contacto/Contacto';
import Admin from './components/admin/Admin';

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/catalogo" component={Product}/>
        <Route path="/login" component={Login}/>
        <Route path="/perfil" component={Perfil}/>
        <Route path="/contacto" component={Contacto}/>
        <Route path="/detail" component={ProductDetailDisplay} />
        <Route path="/admin" component={Admin} />
        <Route render={() => <h2>Aqui  no</h2>} />

    </Switch>

);
