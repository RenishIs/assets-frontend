import { Button } from 'antd';
import { Formik, Form } from 'formik';
import TextInput from '../../Components/UI/TextInput';
import { assetStatusValidations } from '../../Helper/ValidationSchema';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Loader from '../../Components/UI/Loader';

const AssetsForm = ({title, handleAssetStatus, loading, ...rest}) => {

    const { assetStatus } = rest

    const initialState = {
        name : assetStatus ? assetStatus.name : ''
    }

    return (
        <div>
            { loading && <Loader /> }
            <h2 className='text-center fs-4 fw-bold'>{assetStatus ? 'EDIT ASSET STATUS' : 'ADD ASSET STATUS'}</h2>
            <Formik initialValues={initialState} validationSchema={assetStatusValidations} onSubmit={(values) => handleAssetStatus(values)}>
                <Form>
                    <Row>
                        <Col span={6}></Col>
                        <Col span={12}>
                            <TextInput label="STATUS" name="name" id="name"  isLabel={true} />	
                        </Col>
                        <Col span={6}></Col>
                    </Row>
                    <div className="d-flex mt-4 me-4 flex-row-reverse">
                        <Link to="/asset-status"><Button type="primary">Back</Button></Link>
                        <Button type="primary" htmlType="submit" className='me-3'>Submit</Button>
                    </div>				
                </Form>
            </Formik>
        </div>
    )
}

export default AssetsForm