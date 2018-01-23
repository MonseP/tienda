import React, { Component } from 'react';
import { Tabs } from 'antd';
import Envio from './Envio.js';
import TableHome from './tables/TableHome.js';
import Pago from './pago/Pago.js';


class Carrito extends React.Component {


  render() {
    const TabPane = Tabs.TabPane;
  function callback(key) {
    console.log(key);
  }
    return (

      <Tabs onChange={callback} type="card" >

      <TabPane tab="1.Productos" key="1"><TableHome/></TabPane>
      <TabPane tab="2.Envío" key="2"> <Envio/>  </TabPane>
      <TabPane tab="3.Pago" key="3"> <Pago/> </TabPane>
    </Tabs>
    );
  }
}


export default Carrito;
