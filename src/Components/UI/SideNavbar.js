import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import { FaTicketAlt } from 'react-icons/fa';

const { Sider } = Layout;

function getItem(label, icon, path, role, children) {
    return { label, icon, path, role, children}
}

const iconsData = [
    getItem("Dashboard", LaptopOutlined, null , ['admin'], [ 
        getItem("Assets", null, '/assets-dashboard', ['admin'] ),
        getItem("Tickets", null, '/tickets-dashboard', ['admin'])
    ]),
    getItem("Users", UserOutlined, '/users', ['admin']),
    getItem("Assets", LaptopOutlined, '/assets', ['admin']),
    getItem("Asset Categories", LaptopOutlined, '/asset-categories', ['admin']),
    getItem("Asset Types", LaptopOutlined, '/asset-types', ['admin']),
    getItem("Asset Status", LaptopOutlined, '/asset-status', ['admin']),
    getItem("Tickets", FaTicketAlt, '/tickets', ['employee']),
    getItem("Assets", LaptopOutlined, '/assets', ['employee']),
    getItem("Tickets Status", FaTicketAlt, '/tickets-status', ['admin']),
    getItem("All Tickets", FaTicketAlt, '/all-tickets', ['admin'])
]

const SideNavbar = (props) => {

    const role = Cookies.get('role')
    const menuItems = iconsData.filter(item => item.role?.includes(role)).map((item, index) => {
        return {
            key: item?.label?.includes('Dashboard') ? '/dashboard' : item.path,
            icon: React.createElement(item.icon, { className: 'side-nav-bar-icons', }),
            label: item.path ? (<Link to={`${item.path}`}>{item.label}</Link>) : item.label,
            children: item?.children?.map((child, childIndex) => {
                const subKey = child.path
                return {
                    key: subKey,
                    label: <Link to={`${child.path}`}>{child.label}</Link>,
                };
            })
        }
    })

    let location = useLocation()

    return (
        <Sider width='18%' height="100vh" className='overflow-hidden' trigger={null} collapsible collapsed={props?.collapsed}>
            <div className='d-flex justify-content-center align-items-center p-1'>
                <img src="/albiorix-icon.png" alt='pic' style={{ width: '50px' }} />
                {!props?.collapsed && <span className='fw-bold fs-0.5 text-secondary px-2'>Assets Management</span>}
            </div>
            <Menu
                theme="dark"
                mode="inline"
                defaultOpenKeys={['/dashboard']} 
                defaultSelectedKeys={["/tickets-dashboard"]}
                selectedKeys={["/"+location.pathname.split('/')[1]]}
                items={menuItems}
            />
        </Sider>
    )
}

export default SideNavbar