import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import Product from './components/product/Product';
import Login from './components/login/Login';
import ProductDetail from './components/product/ProductDetail';
import Contacto from './components/contacto/Contacto';
import Admin from './components/admin/Admin';
import CarritoHome from './components/carrito/CarritoHome';
import Perfil from './components/perfil/Perfil';
import PerfilDirecciones from './components/perfil/PerfilDirecciones';
import Pedidos from './components/perfil/PerfilDatos/Pedidos';
import Editar from './components/perfil/EditarDatos/Editar';
import Check from './components/checkout/Check';

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/catalogo" component={Product}/>
        <Route path="/login" component={Login}/>
        <Route path="/contacto" component={Contacto}/>
        <Route path="/catalogo/:id" component={ProductDetail} />
        <Route path="/admin" component={Admin} />
        <Route exact path="/carrito" component={CarritoHome} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/direcciones" component={PerfilDirecciones} />
        <Route path="/direcciones" component={PerfilDirecciones} />
        <Route path="/pedidos" component={Pedidos} />
        <Route path="/editarperfil" component={Editar} />
        <Route path="/check" component={Check} />


        <Route render={() => <h2>En construcción</h2>} />


    </Switch>

);
