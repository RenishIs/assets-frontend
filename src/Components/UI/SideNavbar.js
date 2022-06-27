import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, HomeFilled, LaptopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

const iconsData = [
    { icon : HomeFilled, label : 'Dashboard'},
    { icon : UserOutlined, label : 'Users', path:'/users'},
    { icon : LaptopOutlined, label : 'Assets', path:'/assets'},
]

const menuItems = iconsData.map((item, index) => {
    const key = String(index + 1)
    return {
        key :`sub${key}`,
        icon : React.createElement(item.icon, {className : 'side-nav-bar-icons',}),
        label : item.path ? (<Link to={`${item.path}`}>{item.label}</Link>) : item.label,
        children : item.children && item?.children.map((child, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key : subKey,
                label : <Link to={`${child.path}`}>{child.label}</Link>
            }
        })
    }
})

const SideNavbar = ({collapsed}) => {
    return (
        <Sider width='18%' height="100vh" className='overflow-hidden' collapsible collapsed={collapsed} trigger={null} >
            <div className='d-flex justify-content-center align-items-center p-1'>
                <img src="https://images-platform.99static.com/VjQlwl2IRxelKQzp4tzqY8pD4nY=/500x500/top/smart/99designs-contests-attachments/23/23280/attachment_23280405" alt='pic' style={{width:'50px'}}/>
                <span className='fw-bold fs-0.5 text-secondary px-4'>Assests Management</span>
            </div>            
            <Menu 
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                className='side-nav-bar-menu-items fs-6'
                items={menuItems}
                  />
        </Sider>
    )
}

export default SideNavbar