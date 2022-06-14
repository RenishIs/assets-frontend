import React, { useState } from 'react';
import { Layout, Row, Dropdown, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserAddOutlined } from '@ant-design/icons';
import SideNavbar from '../../Components/UI/SideNavbar';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../redux/actions/auth/login';
import { useDispatch } from 'react-redux';

const { Header } = Layout;

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch()

    const menu = (
        <Menu items={[
            {
                label: <Link to="/profile">Profile</Link>,
                key: '0',
            },
            {
                label: <div onClick={() => dispatch(logoutUser())}>Logout</div>,
                key: '1',
            },
          ]}
        />
    );

    return (
        <Layout style={{height : '100vh'}}>
            <SideNavbar collapsed={collapsed}/>
            <Layout className='p-4'>
                <Header className="site-layout-background ">
                    <Row justify="space-between" className='d-flex align-items-center'>
                    {
                        React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className : 'trigger fs-4',
                            onClick: () => setCollapsed(!collapsed)
                        })
                    }
                    <Dropdown overlay={menu} trigger={['click']} >
                        <div className='text-center d-flex align-items-center fs-5 fw-bolder'>
                            <UserAddOutlined className='px-4'/>
                            Hi, Admin
                        </div>
                    </Dropdown>
                    </Row>
                </Header>
            </Layout>
        </Layout>
    )
}

export default Dashboard