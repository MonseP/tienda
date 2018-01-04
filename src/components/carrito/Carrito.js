import React, { Component } from 'react';
import './Carrito.css';
import 'antd/dist/antd.css';
import Tables from './Tables.js';
import Pago from './Pago.js';
import Envio from './Envio.js';
import { Steps, Button, message } from 'antd';
const Step = Steps.Step;

const steps = [{
  title: 'Tu compra',
  content: <Tables/>,
}, {
  title: 'Envío',
  content: <Envio/>,
}, {
  title: 'Pago',
  content:  <Pago/>,
}];

class Carrito extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  render() {
    const { current } = this.state;
    return (
      <div className= "container-carrito">
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">{steps[this.state.current].content}</div>
        <div className="steps-action">
          {
            this.state.current < steps.length - 1
            &&
            <Button type="primary" onClick={() => this.next()}>Siguiente</Button>
          }
          {
            this.state.current === steps.length - 1
            &&
            <Button type="primary" onClick={() => message.success('¡Proceso completado!')}>Terminar</Button>
          }
          {
            this.state.current > 0
            &&
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Anterior
            </Button>
          }
        </div>
      </div>
    );
  }
}


export default Carrito;
