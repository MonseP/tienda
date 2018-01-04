import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import './Perfil.css';

class SubMenu extends React.Component {



  render() {

    const SubMenu = Menu.SubMenu;
    const MenuItemGroup = Menu.ItemGroup;

    function handleClick(e) {
      console.log('click', e);
    }

    return (
<div className="submenu-position">
      <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Información</span></span>}>
            <MenuItemGroup title="Datos personales">
              <Menu.Item key="1">Dirección particular</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Iteom 2">
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Historial</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
</div>
    );
  }
}

export default SubMenu;
