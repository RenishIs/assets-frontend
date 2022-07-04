import { Layout, Menu } from 'antd';
const { Sider } = Layout;

const SideNavbar = ({collapsed, routes, path}) => {

    const menuItems = routes?.filter(route => route.sidebar)
    
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