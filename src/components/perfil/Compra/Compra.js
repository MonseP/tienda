import React, { Component } from 'react';
import { Card } from 'antd';
import './Compra.css';




class Compra extends React.Component {

  render() {
const { Meta } = Card;
    return (
      <div className="compra-actual">
      <Card title="Compraste"  style={{ width: 300}}>
        <img src="http://alimentosprana.com/img/s02.png" alt=""/>
      <div id="des">
      <a href=""><p> Azúcar saludable</p></a>
        <p>$200.00</p>
        </div>
       </Card>

</div>




    );
  }
}

export default Compra;
