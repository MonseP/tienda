import React, { Component } from 'react';
import './Admin.css';
import {Link} from 'react-router-dom';
import { Tabs } from 'antd';
import { Modal, Button } from 'antd';
import { Table, Icon } from 'antd';

import ProductForm from './ProductForm';

const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}
const { Column, ColumnGroup } = Table;

const data = [{
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}];
class AdminDisplay extends Component {

    state = { visible: false }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    hideModal = () => {
        this.setState({
            visible: false,
        });
    }
render() {



    return (
        <div className="admin">
                <h2>Panel de Administrador</h2>
                <div className=" panel_admin">

                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="Órdenes" key="1">
                                <h3 className="tab_name">Órdenes</h3>
                                <Table dataSource={data}>

                                    <Column
                                        title="Nombre del Producto"
                                        dataIndex="firstName"
                                        key="firstName"
                                    />
                                    <Column
                                        title="Descripcion"
                                        dataIndex="lastName"
                                        key="lastName"
                                    />

                                    <Column
                                        title="Precio"
                                        dataIndex="age"
                                        key="age"
                                    />
                                    <Column
                                        title="Cantidad"
                                        dataIndex="age"
                                        key="age"
                                    />
                                    <Column
                                        title="Status"
                                        dataIndex="age"
                                        key="age"
                                    />

                                </Table>

                            </TabPane>
                            <TabPane tab="Productos" key="2">
                                <h3 className="tab_name">Lista de Productos</h3>
                                <Table dataSource={data}>

                                        <Column
                                            title="Nombre del Producto"
                                            dataIndex="firstName"
                                            key="firstName"
                                        />
                                        <Column
                                            title="Descripcion"
                                            dataIndex="lastName"
                                            key="lastName"
                                        />

                                    <Column
                                        title="Precio"
                                        dataIndex="age"
                                        key="age"
                                    />
                                    <Column
                                        title="Cantidad"
                                        dataIndex="age"
                                        key="age"
                                    />

                                </Table>

                                <Button type="primary" onClick={this.showModal}>Modal</Button>
                                <Modal
                                    title="Agregar un nuevo producto"
                                    visible={this.state.visible}
                                    onOk={this.hideModal}
                                    onCancel={this.hideModal}
                                    okText="Guardar"
                                    cancelText="Cancelar"
                                >
                                    <ProductForm/>
                                </Modal>
                            </TabPane>
                            <TabPane tab="Historial" key="3">Historial</TabPane>
                        </Tabs>
                    </div>
            </div>
       );
    }
}

export default AdminDisplay;