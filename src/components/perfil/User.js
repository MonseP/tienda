import React, { Component } from 'react';
import './Perfil.css';
import { Avatar, Badge } from 'antd';



class User extends React.Component {

  render() {
    return (

        <div className="avatar-user">
          <h1>Mis Datos</h1>
            <div className="perfil_user">
                <img className="avatar" src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/19059459_1314745991954119_2064217828501685113_n.jpg?oh=d9dc1742d74dfbbb014efc8cc04b5840&oe=5B1E91ED"/>
            </div>
       </div>
    );
  }
}

export default User;
