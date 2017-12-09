import React, { Component } from 'react';
import './Admin.css';
import {Link} from 'react-router-dom';
import { Form, Input, Upload, Icon, message,  } from 'antd';
const { TextArea } = Input;

const Dragger = Upload.Dragger;

const props = {
    name: 'file',
    multiple: true,
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.success(`${info.file.name} file upload failed.`);

        }
    },
};

class ProductForm extends Component {

    render() {

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nombre" />
                    <Input prefix={<Icon type="tag-o" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Precio" />
                    <Input prefix={<Icon type="tag-o" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Cantidad" />
                    <TextArea  prefix={<Icon type="copy" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Descripción" />

                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <Icon type="inbox" />
                        </p>
                        <p className="ant-upload-text">Haga clic o arrastre el archivo a esta área para cargar
                        </p>
                        <p className="ant-upload-hint">Máximo 5 fotografías por producto</p>
                    </Dragger>


            </Form>
        );
    }
}

export default ProductForm;