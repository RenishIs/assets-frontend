import { Button } from 'antd';
import { Formik, Form, Field } from 'formik';
import TextInput from '../../Components/UI/TextInput';
import { assetValidations } from '../../Helper/ValidationSchema';
import { UserOutlined, EnvironmentFilled} from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { DatePicker } from 'antd';
import { useQuery } from '@apollo/client';
import { GET_ASSET_CATEGORIES_QUERY } from '../../gql/Query/AssetCategories/index';
import { GET_ASSET_STATUS_QUERY } from '../../gql/Query/AssetStatus/index';
import { GET_ASSET_TYPES_QUERY } from '../../gql/Query/AssetTypes/index';
import { GET_USERS_QUERY } from '../../gql/Query/Users/index';
import moment from 'moment'
import Loader from '../../Components/UI/Loader';

const AssetsForm = ({title, handleAsset, loading, ...rest}) => {

    const { asset } = rest

    const { data : users } = useQuery(GET_USERS_QUERY, {
        variables : { 
            status: {
                isActive: true
            }
		}
    })
    const { data : assetCategories } = useQuery(GET_ASSET_CATEGORIES_QUERY)
    const { data : assetStatus } = useQuery(GET_ASSET_STATUS_QUERY)
    const { data : assetTypes } = useQuery(GET_ASSET_TYPES_QUERY)

    const initialState = {
        name : asset ? asset.name : '',
        description : asset ? asset.description : '',
        location : asset ? asset.location : '',
        assetCategory : asset ? asset.assetCategory.id : '',
        assetType : asset ? asset.assetType.id : '',
        purchasedOn : asset ? moment(asset.purchasedOn) : null,
        assetCondition : asset ? asset.assetCondition : '',
        assetStatus : asset ? asset.assetStatus.id : '',
        reason : asset ? asset.reason : '',
        employeeId : asset ? asset.employeeId.id : '',
        dateOfAssetAssignment : asset ? moment(asset.dateOfAssetAssignment) : moment()
    }

    return (
        <div>
            { loading && <Loader />}
            <h2 className='text-center fs-4 fw-bold'>{asset ? 'EDIT ASSET' : 'ADD ASSET'}</h2>
            <Formik initialValues={initialState} validationSchema={assetValidations} onSubmit={(values) => handleAsset(values)}>
            {({
                values,
                touched,
                errors,
                setFieldValue
            }) => {
                return (
                <Form>
                    <Row>
                        <Col span={12}>
                            <TextInput label="NAME" name="name" id="name" prefix={<UserOutlined style={{color : 'black'}}/>} isLabel={true} />	
                        </Col>
                        <Col span={12}>
                            <TextInput label="DESCRIPTION" name="description" id="description" prefix={<UserOutlined style={{color : 'black'}}/>} isLabel={true} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <TextInput label="LOCATION" name="location" id="location" prefix={<EnvironmentFilled style={{color : 'black'}}/>} isLabel={true} />	
                        </Col>
                        <Col span={12}>
                            <div className='text-start ms-4 mb-1 mt-4'>
                                <label htmlFor="assetCategory" className="text-body text-start fs-6 fw-bold">CATEGORY</label>
                            </div>
                            <Field as="select" 
                                    name="assetCategory" 
                                    id="assetCategory"  
                                    style={{height:"43px"}} 
                                    className="form-input">
                                <option>Select Category</option>
                                { 
                                assetCategories?.assetCategories.map(item => (
                                    <option value={item.id} key={item.id}>{item.name}</option>
                                ))
                                }
                            </Field>
                            {
                                touched.assetCategory && errors.assetCategory ? (
                                    <div className="text-start ms-4 mb-0 fs-6 text-danger">{errors.assetCategory}</div>
                                ) : null
                            }
                        </Col>
                    </Row>
                    <Row>
                    <Col span={12}>
                            <div className='text-start ms-4 mb-1 mt-4'>
                                <label htmlFor="assetType" className="text-body text-start fs-6 fw-bold">TYPE</label>
                            </div>
                            <Field as="select" 
                                    name="assetType" 
                                    id="assetType"  
                                    style={{height:"43px"}} 
                                    className="form-input">
                                <option>Select Type</option>
                                {
                                assetTypes?.assetTypes.map(item => (
                                    <option value={item.id} key={item.id}>{item.name}</option>
                                ))
                                }
                            </Field>
                            {
                                touched.assetType && errors.assetType ? (
                                    <div className="text-start ms-4 mb-0 fs-6 text-danger">{errors.assetType}</div>
                                ) : null
                            }
                        </Col>
                        <Col span={12}>
                            <div className='text-start ms-4 mb-1 mt-4'>
                                <label htmlFor="purchasedOn" className="text-body text-start fs-6 fw-bold">PURCHASED ON</label>
                            </div>
                            <DatePicker style={{height:"43px"}} className="form-input" 
                            value={values.purchasedOn} 
                            onChange={(date) => setFieldValue('purchasedOn', date)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <TextInput label="CONDITION" name="assetCondition" id="assetCondition" prefix={<UserOutlined style={{color : 'black'}}/>} isLabel={true} />	
                        </Col>
                        <Col span={12}>
                            <div className='text-start ms-4 mb-1 mt-4'>
                                <label htmlFor="assetStatus" className="text-body text-start fs-6 fw-bold">STATUS</label>
                            </div>
                            <Field as="select" 
                                    name="assetStatus" 
                                    id="assetStatus"  
                                    style={{height:"43px"}} 
                                    className="form-input">
                                <option>Select Status</option>
                                {
                                assetStatus?.assetStatus.map(item => (
                                    <option value={item.id} key={item.id}>{item.name}</option>
                                ))
                                }
                            </Field>
                            {
                                touched.assetStatus && errors.assetStatus ? (
                                    <div className="text-start ms-4 mb-0 fs-6 text-danger">{errors.assetStatus}</div>
                                ) : null
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <TextInput label="REASON IF NOT AVAILABLE" name="reason" id="reason" prefix={<UserOutlined style={{color : 'black'}}/>} isLabel={true} />	
                        </Col>
                        <Col span={12}>
                            <div className='text-start ms-4 mb-1 mt-4'>
                                <label htmlFor="employeeId" className="text-body text-start fs-6 fw-bold">EMPLOYEE ID</label>
                            </div>
                            <Field as="select" 
                                    name="employeeId" 
                                    id="employeeId"  
                                    style={{height:"43px"}} 
                                    className="form-input">
                                <option>Select Employee</option>
                                {
                                users?.users.map(item => (
                                    <option value={item.id} key={item.id}>{item.firstName} {item.lastName}</option>
                                ))
                                }
                            </Field>
                            {
                                touched.employeeId && errors.employeeId ? (
                                    <div className="text-start ms-4 mb-0 fs-6 text-danger">{errors.employeeId}</div>
                                ) : null
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <div className='text-start ms-4 mb-1 mt-4'>
                                <label htmlFor="dateOfAssetAssignment" className="text-body text-start fs-6 fw-bold">DATE OF ASSET ASSIGNMENT</label>
                            </div>
                            <DatePicker style={{height:"43px"}}  className="form-input" 
                            value={values.dateOfAssetAssignment}
                            onChange={(date) => setFieldValue('dateOfAssetAssignment', date)}
                                />
                            {
                                touched.dateOfAssetAssignment && errors.dateOfAssetAssignment ? (
                                    <div className="text-start ms-4 mb-0 fs-6 text-danger">{errors.dateOfAssetAssignment}</div>
                                ) : null
                            }
                        </Col>
                        <Col span={12}></Col>
                    </Row>
                    <div className="d-flex mt-4 me-4 flex-row-reverse">
                        <Link to="/assets"><Button type="primary">Back</Button></Link>
                        <Button type="primary" htmlType="submit" className='me-3'>Submit</Button>
                    </div>				
                </Form>
                )
            }}
            </Formik>
        </div>
    )
}

export default AssetsForm