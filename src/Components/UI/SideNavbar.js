import React, {useState} from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
const { Sider } = Layout;

function getItem(label, icon, path, role) {
    return { label, icon, path, role}
}
const iconsData = [
    getItem("Users", UserOutlined, '/users', ['admin', 'employee']),
    getItem("Assets", LaptopOutlined, '/assets', ['admin']),
    getItem("Asset Categories", LaptopOutlined, '/asset-categories', ['admin']),
    getItem("Asset Types", LaptopOutlined, '/asset-types', ['admin']),
    getItem("Asset Status", LaptopOutlined, '/asset-status', ['admin']),

]

const SideNavbar = (props) => {

    const role = Cookies.get('role')
    const menuItems = iconsData.filter(item => item.role?.includes(role)).map((item, index) => {
        return {
            key: item.path,
            icon: React.createElement(item.icon, { className: 'side-nav-bar-icons', }),
            label: item.path ? (<Link to={`${item.path}`}>{item.label}</Link>) : item.label
        }
    })

    let location = useLocation()
    return (
        <Sider width='18%' height="100vh" className='overflow-hidden' trigger={null} collapsible collapsed={props?.collapsed}>
            {console.log(props,'pp')}
            <div className='d-flex justify-content-center align-items-center p-1'>
                <img src="https://images-platform.99static.com/VjQlwl2IRxelKQzp4tzqY8pD4nY=/500x500/top/smart/99designs-contests-attachments/23/23280/attachment_23280405" alt='pic' style={{ width: '50px' }} />
                {!props?.collapsed && <span className='fw-bold fs-0.5 text-secondary px-2'>Assets Management</span>}
            </div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["/users"]}
                selectedKeys={[location.pathname]}
                items={menuItems}
            />
        </Sider>
    )
}

export default SideNavbar