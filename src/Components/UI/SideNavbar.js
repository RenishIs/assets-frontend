import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import { FaTicketAlt } from 'react-icons/fa';

const { Sider } = Layout;

function getItem(label, icon, path, role, hasChildren, children) {
    return { label, icon, path, role, hasChildren, children}
}

const iconsData = [
    getItem("Users", UserOutlined, '/users', ['admin', 'employee'], false),
    getItem("Assets", LaptopOutlined, '/assets', ['admin'], true, [{label : 'Assets Dashboard', path : '/assets/dashboard'}]),
    getItem("Asset Categories", LaptopOutlined, '/asset-categories', ['admin'], false),
    getItem("Asset Types", LaptopOutlined, '/asset-types', ['admin'], false),
    getItem("Asset Status", LaptopOutlined, '/asset-status', ['admin'], false),
    getItem("Tickets", FaTicketAlt, '/tickets', ['employee'], false),
    getItem("Tickets Status", FaTicketAlt, '/tickets-status', ['admin'], false),
    getItem("All Tickets", FaTicketAlt, '/all-tickets', ['admin'], true, [{label : 'Tickets Dashboard', path : '/tickets/dashboard'}]),
]

const SideNavbar = (props) => {

    const role = Cookies.get('role')
    const menuItems = iconsData.filter(item => item.role?.includes(role)).map((item, index) => {
        return {
            key: item.path,
            icon: React.createElement(item.icon, { className: 'side-nav-bar-icons', }),
            label: item.path ? (<Link to={`${item.path}`}>{item.label}</Link>) : item.label,
            children: item.hasChildren ? (
                item?.children?.map((child, childIndex) => {
                    const subKey = index * 4 + childIndex + 1
                    return {
                        key: subKey,
                        label: <Link to={`${child.path}`}>{child.label}</Link>,
                    };
                })
            ) : null
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
                defaultSelectedKeys={["/users"]}
                selectedKeys={[location.pathname]}
                items={menuItems}
            />
        </Sider>
    )
}

export default SideNavbar