import React, { Component } from 'react';
import { Tabs } from 'antd';
import PerfilPedidos from './PerfilDatos/PerfilPedidos';
import PerfilDirecciones from './PerfilDirecciones';
import {Link, NavLink} from 'react-router-dom';
import './Perfil.css';




class TabsMenu extends React.Component {



  render() {

    const TabPane = Tabs.TabPane;

    function callback(key) {
      console.log(key);
    }
    return (
        <div className="box_tab">
            <div className='tabs'>
                  <Tabs defaultActiveKey="1" onChange={callback}>
                      <TabPane tab="Última orden" key="1"> <PerfilPedidos/> </TabPane>
                      <TabPane tab="Historial" key="3">Content of Tab Pane 3</TabPane>
                      <TabPane tab="Información de envío" key="2"><PerfilDirecciones/> </TabPane>

                  </Tabs>
            </div>
        </div>



    );
  }
}

export default TabsMenu;
