import React, { Component } from 'react';
import './Perfil.css';
import { Avatar, Badge } from 'antd';



class User extends React.Component {

  render() {
    return (

<div className="avatar-user">
<Avatar icon="user" />

<h2>Montserrat</h2>
       </div>
    );
  }
}

export default User;
