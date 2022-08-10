import { Button } from 'antd';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import TextInput from '../../Components/UI/TextInput';
import { assetCategoryValidation } from '../../Helper/ValidationSchema';
import { Row, Col } from 'antd';
import Loader from '../../Components/UI/Loader';

const AssetsForm = ({ handleAssetCategory, loading, ...rest}) => {

    const { assetCategory } = rest

    const initialState = {
        name : assetCategory ? assetCategory.name : '',
    }

    return (
        <div>
            { loading && <Loader /> }
            <h2 className='text-center fs-4 fw-bold'>{assetCategory ? 'EDIT ASSET CATEGORY' : 'ADD ASSET CATEGORY'}</h2>
            <Formik initialValues={initialState} validationSchema={assetCategoryValidation} onSubmit={(values) => handleAssetCategory(values)}>
                <Form>
                    <Row>
                        <Col span={6}></Col>
                        <Col span={12}>
                            <TextInput label="CATEGORY" name="name" id="name" isLabel={true} />
                        </Col>
                        <Col span={6}></Col>
                    </Row>  
                    <div className="d-flex mt-4 me-4 flex-row-reverse">
                        <Link to="/asset-categories"><Button type="primary">Back</Button></Link>
                        <Button type="primary" htmlType="submit" className='me-3'>Submit</Button>
                    </div>				
                </Form>
            </Formik>
        </div>
    )
}

export default AssetsForm