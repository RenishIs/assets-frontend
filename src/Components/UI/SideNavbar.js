import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, HomeFilled } from '@ant-design/icons';

const { Sider } = Layout;

const iconsData = [
    { icon : HomeFilled, label : 'Dashboard'},
    { icon : UserOutlined, label : 'Users', children : ['Add User', 'Manage Users']},
]

const menuItems = iconsData.map((item, index) => {
    const key = String(index + 1)
    return {
        key :`sub${key}`,
        icon : React.createElement(item.icon, {style : {color : '#46f092'},}),
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
        <Sider width='25%' className="site-layout-background" collapsible collapsed={collapsed} trigger={null} >
            <Menu mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{
                        height: '100%',
                        borderRight: 0,
                        color : '#3308cc'
                  }}
                  items={menuItems}/>
        </Sider>
    )
}

export default SideNavbar