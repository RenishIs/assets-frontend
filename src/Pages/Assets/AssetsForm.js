import React, { useState } from 'react';
import { Button } from 'antd';
import { Formik, Form, Field } from 'formik';
import TextInput from '../../Components/UI/TextInput';
import Dashboard from '../Dashboard';
import { assetValidations } from '../../Helper/ValidationSchema';
import { UserOutlined, EnvironmentFilled, CalendarOutlined} from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { DatePicker, Space } from 'antd';
import { useQuery } from '@apollo/client';
import { GET_ASSET_CATEGORIES_QUERY } from '../../gql/Query/AssetCategories/index';
import { GET_ASSET_STATUS_QUERY } from '../../gql/Query/AssetStatus/index';
import { GET_ASSET_TYPES_QUERY } from '../../gql/Query/AssetTypes/index';
import { GET_USERS_QUERY } from '../../gql/Query/Users/index';

const AssetsForm = ({title, handleAsset, ...rest}) => {

    const { asset } = rest

    const { data : users } = useQuery(GET_USERS_QUERY)
    const { data : assetCategories } = useQuery(GET_ASSET_CATEGORIES_QUERY)
    const { data : assetStatus } = useQuery(GET_ASSET_STATUS_QUERY)
    const { data : assetTypes } = useQuery(GET_ASSET_TYPES_QUERY)

    const [purchasedOnDate, setPurchasedOnDate] = useState('');
    const [dateOfAssetAssignmentDate, setDateOfAssetAssignmentDate] = useState('');

    const initialState = {
        name : asset ? asset.name : '',
        description : asset ? asset.description : '',
        location : asset ? asset.location : '',
        assetCategory : asset ? asset.assetCategory.id : '',
        assetType : asset ? asset.assetType.id : '',
        purchasedOn : asset ? asset.purchasedOn : '22/7',
        assetCondition : asset ? asset.assetCondition : '',
        assetStatus : asset ? asset.assetStatus.id : '',
        reason : asset ? asset.reason : '',
        employeeId : asset ? asset.employeeId.id : '',
        dateOfAssetAssignment : asset ? asset.dateOfAssetAssignment : '22/5'
    }

    const onPurchasedOnChange = (date, dateString) => {
        setPurchasedOnDate(dateString)
    };

    const onDateOfAssetAssignmentChange = (date, dateString) => {
        setDateOfAssetAssignmentDate(dateString)
    };

      

    return (
        <Dashboard>
            <div>
                {console.log(users?.users, 'assetCategories')}
                <h2 className='text-center fs-4 fw-bold'>{asset ? 'EDIT ASSET' : 'ADD ASSET'}</h2>
                <Formik initialValues={initialState}  onSubmit={(values) => handleAsset(values)}>
                {({
                    values,
                    errors,
                    touched,
                    handleSubmit,
                    handleChange,
                    isSubmitting,
                    validating,
                    valid
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
                                   { 
                                    assetCategories?.assetCategories.map(item => (
                                        <option value={item.id} key={item.id}>{item.name}</option>
                                    ))
                                   }
                                </Field>
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
                                   {
                                    assetTypes?.assetTypes.map(item => (
                                        <option value={item.id} key={item.id}>{item.name}</option>
                                    ))
                                   }
                                </Field>
                            </Col>
                            <Col span={12}>
                                <div className='text-start ms-4 mb-1 mt-4'>
                                    <label htmlFor="purchasedOn" className="text-body text-start fs-6 fw-bold">PURCHASED ON</label>
                                </div>
                                <DatePicker style={{height:"43px"}} className="form-input" 
                                // onChange={(date,dateString) => handleChange(dateString)}
                                // value={values.purchasedOn} 
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
                                   {
                                    assetStatus?.assetStatus.map(item => (
                                        <option value={item.id} key={item.id}>{item.name}</option>
                                    ))
                                   }
                                </Field>
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
                                   {
                                    users?.users.map(item => (
                                        <option value={item.id} key={item.id}>{item.username}</option>
                                    ))
                                   }
                                </Field>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <div className='text-start ms-4 mb-1 mt-4'>
                                    <label htmlFor="dateOfAssetAssignment" className="text-body text-start fs-6 fw-bold">DATE OF ASSET ASSIGNMENT</label>
                                </div>
                                <DatePicker style={{height:"43px"}}  className="form-input" 
                                // value={values.dateOfAssetAssignment}
                                // onChange={(date,dateString) => handleChange(dateString)}
                                 />
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
        </Dashboard>
    )
}

export default AssetsForm