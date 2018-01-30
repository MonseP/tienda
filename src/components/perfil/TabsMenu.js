import React, { Component } from 'react';
import { Tabs } from 'antd';
import Direccion from './Direccion/Direccion.js';
import PerfilPedidos from './PerfilDatos/PerfilPedidos.js';
import {Link, NavLink} from 'react-router-dom';
import './Perfil.css';




class TabsMenu extends React.Component {



  render() {

    const TabPane = Tabs.TabPane;

    function callback(key) {
      console.log(key);
    }
    return (
<div className="tabs">
      <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Tus datos" key="1">  </TabPane>
          <TabPane tab="Dirección" key="2"><Direccion/> </TabPane>
          <TabPane tab="Historial de Pedidos" key="3"><PerfilPedidos/></TabPane>
        </Tabs>


</div>




    );
  }
}

export default TabsMenu;
