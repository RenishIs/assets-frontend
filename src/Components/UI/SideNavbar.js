import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, HomeFilled, TeamOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

const iconsData = [
    { icon : HomeFilled, label : 'Dashboard', path:'/dashboard'},
    { icon : UserOutlined, label : 'Users', children : [{label : 'Add User', path:'/users/add'}, {label : 'Manage Users', path:'/users'}]},
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
        <Sider width='25%' className="bg-white"  collapsible collapsed={collapsed} trigger={null} >
            <div className='mt-2 d-flex justify-content-center align-items-center'>
                <TeamOutlined className='side-nav-bar-icons fs-1' />
                <span className='fw-bold fs-1 text-secondary px-4'>AMS</span>
            </div>            
            <Menu mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  selectedKeys={['sub1']}
                  className='side-nav-bar-menu-items fs-6'
                  items={menuItems}/>
        </Sider>
    )
}

export default SideNavbar