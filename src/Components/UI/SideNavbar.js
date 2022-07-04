import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, HomeFilled, LaptopOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
const { Sider } = Layout;
function getItem(label, icon, path) {
    return {
        label,

        icon,
        path,
    };
}
const iconsData = [
    getItem("Users", UserOutlined, '/users'),
    getItem("Assets", LaptopOutlined, '/assets'),
    getItem("Asset Categories", LaptopOutlined, '/asset-categories'),
    getItem("Asset Types", LaptopOutlined, '/asset-types'),
    getItem("Asset Status", LaptopOutlined, '/asset-status'),

]

const menuItems = iconsData.map((item, index) => {

    return {
        key: item.path,
        icon: React.createElement(item.icon, { className: 'side-nav-bar-icons', }),
        label: item.path ? (<Link to={`${item.path}`}>{item.label}</Link>) : item.label
    }

})

const SideNavbar = () => {

    let location = useLocation()
    return (
        <Sider width='18%' height="100vh" className='overflow-hidden' trigger={null} >
            <div className='d-flex justify-content-center align-items-center p-1'>
                <img src="https://images-platform.99static.com/VjQlwl2IRxelKQzp4tzqY8pD4nY=/500x500/top/smart/99designs-contests-attachments/23/23280/attachment_23280405" alt='pic' style={{ width: '50px' }} />
                <span className='fw-bold fs-0.5 text-secondary px-4'>Assests Management</span>
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