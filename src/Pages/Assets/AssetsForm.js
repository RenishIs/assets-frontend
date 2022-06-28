import { Button } from 'antd';
import { Formik, Form } from 'formik';
import TextInput from '../../Components/UI/TextInput';
import Dashboard from '../Dashboard';
import { assetValidations } from '../../Helper/ValidationSchema';
import { UserOutlined, MailFilled, PhoneFilled} from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const AssetsForm = ({title, handleAsset, ...rest}) => {

    const { asset } = rest

    const initialState = {
        name : asset ? asset.name : '',
        description : asset ? asset.description : '',
    }

    return (
        <Dashboard>
            <div>
                <h2 className='text-center fs-4 fw-bold'>{asset ? 'EDIT ASSET' : 'ADD ASSET'}</h2>
                <Formik initialValues={initialState} validationSchema={assetValidations} onSubmit={(values) => handleAsset(values)}>
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
                            <Link to="/assets"><Button type="primary">Back</Button></Link>
                            <Button type="primary" htmlType="submit" className='me-3'>Submit</Button>
                        </div>				
                    </Form>
                </Formik>
            </div>
        </Dashboard>
    )
}

export default AssetsForm