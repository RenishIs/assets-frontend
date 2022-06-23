import { Button, Card } from 'antd';
import { Formik, Form } from 'formik';
import TextInput from '../../Components/UI/TextInput';
import Dashboard from '../Dashboard';

const AssetsForm = ({title, handleAsset, ...rest}) => {

    const { asset } = rest

    const initialState = {
        name : asset ? asset.name : '',
        description : asset ? asset.description : '',
    }

    return (
        <Dashboard>
            <div className="form site-card-border-less-wrapper">
                <Card style={{ width: '45%' }}>
                    <h2 className='text-center'>{asset ? 'EDIT ASSET' : 'ADD ASSET'}</h2>
                    <Formik initialValues={initialState} onSubmit={(values) => handleAsset(values)}>
                        <Form>
                            <TextInput label="NAME" name="name" id="name"/>	
                            <TextInput label="DESCRIPTION" name="description" id="description" />
                            <div className="d-flex mt-4 flex-row-reverse">
                                <Button type="primary" htmlType="submit">Submit</Button>
                            </div>				
                        </Form>
                    </Formik>
                </Card>
            </div>
        </Dashboard>
    )
}

export default AssetsForm