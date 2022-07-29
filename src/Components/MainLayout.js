import React, { useState } from 'react';
import { Layout, Row, Dropdown, Menu, Col } from 'antd';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Cookies from "js-cookie";
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import SideNavbar from './UI/SideNavbar';

const { Header } = Layout;

const MainLayout = ({children, routes, path}) => {
    
    const [collapsed, setCollapsed] = useState(false);

    const history = useHistory()

    const location = useLocation()

    const isDashboard = location.pathname.includes('dashboard')

    const user= Cookies.get('user');
    const role = Cookies.get('role')

    const logoutUser = () => {
        Cookies.remove('token')
        Cookies.remove('role')
        Cookies.remove('user')
        history.push('/user/login')
    }

    const items = [
        {
            label: <Link to="/profile" className="text-body"><UserOutlined style={{color:"blue"}} className='dropdown-list-main-container' />&nbsp;Profile</Link>,
            key: '0',
        },
        {
            label: <div className="text-body" onClick={logoutUser}><LogoutOutlined style={{color:"red"}} className='dropdown-list-main-container'/>&nbsp;Logout</div>,
            key: '2',
        },
    ]

    const settingsItem = { label: <Link to="/" className="text-body"><SettingOutlined style={{color:"green"}} className='dropdown-list-main-container'/>&nbsp;Settings</Link>, key: '1',}
    const updatedItems = role === 'admin' ? [...items, settingsItem ] : [...items]

    const menu = (
        <Menu items={updatedItems}
        />
    );

    return (
        <Layout style={{height : '100vh'}}>
            <Layout>
                <SideNavbar collapsed={collapsed} routes={routes} path={path}/>
                <Layout className='overflow-auto'>
                    <Header className={`bg-white ${!isDashboard && 'mb-4'}`}>
                        <Row justify="space-between" className='px-4 header' >
                            <Col>
                            {
                            React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className : 'trigger fs-4',
                                onClick: () => setCollapsed(!collapsed)
                            })
                            }
                            </Col>
                            <Col>
                                <Dropdown overlay={menu} trigger={['click']} style={{minWidth:"150px", width:'150px'}}>
                                    <div className='text-center d-flex align-items-center justify-content-end fs-5 fw-bolder'>
                                        <img src="/user-1.png" alt='pic' width="45px" /> &nbsp;
                                        Hi, {user}
                                    </div>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Header>
                    <div className={`bg-white px-4 ${!isDashboard && 'main-card mx-4 mb-4 py-4'}`}>
                        {children}
                    </div>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default MainLayout