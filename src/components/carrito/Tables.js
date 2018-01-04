import React, { Component } from 'react';
import Carrito from './Carrito.css';
import Cell from './Cell.js';
import { Table, Input, Icon, Button, Popconfirm } from 'antd';
import 'antd/dist/antd.css';



class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: 'No.',
      dataIndex: 'id',
      width: '30%',
      render: (text, record) => (
        <Cell
          value={text}
          onChange={this.onCellChange(record.key, 'name')}
        />
      ),
    }, {
      title: 'Producto',
      dataIndex: 'producto',
    }, {
      title: 'Descripción',
      dataIndex: 'descripcion',
    },{
      title: 'Precio',
      dataIndex: 'precio',
    },




     {
      title: '',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          this.state.dataSource.length > 1 ?
          (
            <Popconfirm title="¿Está seguro de eliminar?" onConfirm={() => this.onDelete(record.key)}>
              <a href="#">Eliminar</a>
            </Popconfirm>
          ) : null
        );
      },
    }];

    this.state = {
      dataSource: [{
        key: '0',
        id: '1',
        producto: 'Miel',
        descripcion: 'Es miel de abeja',
        precio: '$200'
      }, {
        key: '1',
        id: '2',
        producto: 'Jarabe de lima',
        descripcion: 'Bueno para la tos',
        precio: '$300'
      }],
      count: 2,

    };
  }


  onCellChange = (key, dataIndex) => {
    return (value) => {
      const dataSource = [...this.state.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.setState({ dataSource });
      }
    };
  }
  onDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  }
  render() {
    const { dataSource } = this.state;
    const columns = this.columns;
    return (
      <div>



    {/*    <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button> */}


        <Table bordered dataSource={dataSource} columns={columns}  />
        <div className="form-table-total">
        <h3>Total : </h3>
        <input type="text"/>

        </div>


      </div>
    );
  }
}



export default Tables;
