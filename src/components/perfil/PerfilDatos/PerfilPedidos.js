import React, { Component } from 'react';
import { Table, Input, Button, Icon } from 'antd';
import '../Perfil.css';


const data = [{
  key: '1',
  name: 'Miel',
  precio: 200,
  descripcion: 'Comprado',
}, {
  key: '2',
  name: 'Miel de abeja',
  precio: 490,
  descripcion: 'Comprado',
}, {
  key: '3',
  name: 'ddddd',
  precio: 320,
  descripcion: 'En envío',
}];

class PerfilPedidos extends React.Component {


  state = {
    filterDropdownVisible: false,
    data,
    searchText: '',
    filtered: false,
  };
  onInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  }
  onSearch = () => {
    const { searchText } = this.state;
    const reg = new RegExp(searchText, 'gi');
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: data.map((record) => {
        const match = record.name.match(reg);
        if (!match) {
          return null;
        }
        return {
          ...record,
          name: (
            <span>
              {record.name.split(reg).map((text, i) => (
                i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
              ))}
            </span>
          ),
        };
      }).filter(record => !!record),
    });
  }
  render() {
    const columns = [{
      title: 'Artículo',
      dataIndex: 'name',
      key: 'name',
      filterDropdown: (

        <div className="custom-filter-dropdown">
          <Input
            ref={ele => this.searchInput = ele}
            placeholder="Search name"
            value={this.state.searchText}
            onChange={this.onInputChange}
            onPressEnter={this.onSearch}
          />
          <Button type="primary" onClick={this.onSearch}>Search</Button>
        </div>
      ),
      filterIcon:<Icon type="search" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
      filterDropdownVisible: this.state.filterDropdownVisible,
      onFilterDropdownVisibleChange: (visible) => {
        this.setState({
          filterDropdownVisible: visible,
        }, () => this.searchInput && this.searchInput.focus());
      },
    }, {
      title: 'Precio',
      dataIndex: 'precio',
      key: 'precio',
    }, {
      title: 'Descripción',
      dataIndex: 'descripcion',
      key: 'descripcion',
      filters: [{
        text: 'London',
        value: 'London',
      }, {
        text: 'New York',
        value: 'New York',
      }],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    }];
    return <Table className="pedidos-table" columns={columns} dataSource={this.state.data} style={{background: 'white'}}/>;


  }
}
export default PerfilPedidos;
