import React, { Component } from 'react';
import { Card } from 'antd';
import {Link, NavLink} from 'react-router-dom';
import './Perfil.css';



class PerfilPersonal extends React.Component {

  render() {
    return (






          <div style={{ background: '#ECECEC', padding: '30px' ,height:'500px', width:'100%' }}>
              <Card title="Montserrat Plata" bordered={false} style={{ width: 200 ,top:'60px' }}>
                <p>Email: monse@gmail.com</p>
                <p>Nombre: Montserrat Plata</p>
                <p>Usuario:P72727</p>
              </Card>
            </div>





    );
  }
}

export default PerfilPersonal;
