import { Button } from 'antd';
import { Formik, Form } from 'formik';
import TextInput from '../../Components/UI/TextInput';
import Dashboard from '../Dashboard';
import { UserOutlined, MailFilled, PhoneFilled} from '@ant-design/icons';
import { Row, Col } from 'antd';

const AssetsForm = ({title, handleAsset, ...rest}) => {

    const { asset } = rest

    const initialState = {
        name : asset ? asset.name : '',
        description : asset ? asset.description : '',
    }

    return (
        <Dashboard>
            <div>
                <h2 className='text-center fs-3 fw-bold'>{asset ? 'EDIT ASSET' : 'ADD ASSET'}</h2>
                <Formik initialValues={initialState} onSubmit={(values) => handleAsset(values)}>
                    <Form>
                        <Row>
                            <Col span={12}>
                                <TextInput label="NAME" name="name" id="name" prefix={<UserOutlined style={{color : 'black'}}/>} isLabel={true} />	
                            </Col>
                            <Col span={12}>
                                <TextInput label="DESCRIPTION" name="description" id="description" prefix={<UserOutlined style={{color : 'black'}}/>} isLabel={true} />
                            </Col>
                        </Row>
                        <div className="d-flex mt-4 me-4 flex-row-reverse">
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </div>				
                    </Form>
                </Formik>
            </div>
        </Dashboard>
    )
}

export default AssetsForm