import { Button } from 'antd';
import { Formik, Form } from 'formik';
import TextInput from '../../Components/UI/TextInput';
import { assetTypeValidations } from '../../Helper/ValidationSchema';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Loader from '../../Components/UI/Loader';

const AssetTypesForm = ({title, handleAssetType, loading, ...rest}) => {

    const { assetType } = rest
    
    const initialState = {
        name : assetType ? assetType.name : ''
    }

    return (
        <div>
            { loading && <Loader /> }
            <h2 className='text-center fs-4 fw-bold'>{assetType ? 'EDIT ASSET TYPE' : 'ADD ASSET TYPE'}</h2>
            <Formik initialValues={initialState} validationSchema={assetTypeValidations} onSubmit={(values) => handleAssetType(values)}>
                <Form>
                    <Row>
                        <Col span={6}></Col>
                        <Col span={12}>
                            <TextInput label="TYPE" name="name" id="name" isLabel={true} />	
                        </Col>
                        <Col span={6}></Col>
                    </Row>
                    <div className="d-flex mt-4 me-4 flex-row-reverse">
                        <Link to="/asset-types"><Button type="primary">Back</Button></Link>
                        <Button type="primary" htmlType="submit" className='me-3'>Submit</Button>
                    </div>				
                </Form>
            </Formik>
        </div>
    )
}

export default AssetTypesForm