import React, { useState } from 'react';
import { Layout, Card, Row, Col } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, TeamOutlined, CheckOutlined, DeleteFilled, InfoOutlined } from '@ant-design/icons';
import SideNavbar from '../../Components/UI/SideNavbar';

const { Header, Content } = Layout;

const CardLayout = ({title, count, Icon, color}) => (
    <Card hoverable className='' >
        <Row justify="space-around">
            <Icon style={{ fontSize: '400%', color }}/>
            <Col className='fs-2 text-secondary'>
                <Col>{title}</Col>
                <Col>{count}</Col>
            </Col>
        </Row>                            
    </Card>
)

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout>
            <SideNavbar collapsed={collapsed}/>
            <Layout className='p-4'>
                <Header className="site-layout-background">
                {
                    React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className : 'trigger',
                        style:{ fontSize: '200%' },
                        onClick: () => setCollapsed(!collapsed)
                    })
                }
                </Header>
                <Content className="site-layout-background px-5">Dashboard</Content>
                <Content className="site-layout-background">
                    <Row>
                        <Col xs={{ span: 5, offset: 1}} lg={{ span: 6, offset:1 }}>
                            <CardLayout title="Employees" count={55} Icon={TeamOutlined} color='#ebaf0c'/>
                        </Col>
                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 1 }}>
                            <CardLayout title="Leaves" count={25} Icon={CheckOutlined} color='#46f092'/>
                        </Col>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 1 }}>
                            <CardLayout title="Approved" count={35} Icon={CheckOutlined} color='#3db1d1'/>                       
                        </Col>
                    </Row>
                    {/* <Row justify="space-between">
                        <CardLayout title="Employees" count={55} Icon={TeamOutlined} color='#ebaf0c'/>
                        <CardLayout title="Leaves" count={25} Icon={CheckOutlined} color='#46f092'/>
                        <CardLayout title="Approved" count={35} Icon={CheckOutlined} color='#3db1d1'/>                        
                    </Row> */}
                    <Row className='mt-4'>
                        <Col xs={{ span: 5, offset: 1}} lg={{ span: 6, offset:1 }}>
                            <CardLayout title="Pending" count={55} Icon={InfoOutlined} color='#ebaf0c'/>
                        </Col>
                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 1 }}>
                            <CardLayout title="Cancelled" count={25} Icon={DeleteFilled} color='#fa5246'/>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Dashboard