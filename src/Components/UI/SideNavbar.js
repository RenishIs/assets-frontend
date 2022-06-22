import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, HomeFilled, TeamOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const iconsData = [
    { icon : HomeFilled, label : 'Dashboard'},
    { icon : UserOutlined, label : 'Users', children : ['Users', 'Manage Users']},
]

const menuItems = iconsData.map((item, index) => {
    const key = String(index + 1)
    return {
        key :`sub${key}`,
        icon : React.createElement(item.icon, {className : 'side-nav-bar-icons',}),
        label : item.label,
        children : item.children && item?.children.map((child, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key : subKey,
                label : child
            }
        })
    }
})

const SideNavbar = ({collapsed}) => {
    return (
        <Sider width='20%' className="bg-white" collapsible collapsed={collapsed} trigger={null} >
            <div className='mt-2 d-flex justify-content-center align-items-center'>
                <TeamOutlined className='side-nav-bar-icons fs-1' />
                <span className='fw-bold fs-1 text-secondary px-4'>AMS</span>
            </div>            
            <Menu mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  className='side-nav-bar-menu-items fs-6'
                  items={menuItems}/>
        </Sider>
    )
}

export default SideNavbar