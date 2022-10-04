import { Table, Space, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { tableColumns } from './CONSTANTS';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { GET_ASSET_TYPES_QUERY } from '../../gql/Query/AssetTypes';
import { DELETE_ASSET_TYPE_MUTATION } from '../../gql/Mutation/AssetTypes';
import openNotificationWithIcon from '../../Helper/Notification';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import Loader from '../../Components/UI/Loader';
import { Tooltip } from 'antd';
import { GENERATE_CSV_QUERY } from '../../gql/Query/GenerateCSV/index'
import { generateCSV } from '../../Helper/generateCSV';

const confirm = Modal.confirm;

const AssetTypesListing = () => {

	const { loading, data } = useQuery(GET_ASSET_TYPES_QUERY);

	const errorIfAssigned = () => {
		Modal.error({
		  title: 'This asset type is being used!!',
		  content: 'You cannot delete this asset type, if you want to then delete the asset associated with the type',
		});
	  };
	  const [ generateAssetTypeCSV, { data : csvData } ] = useLazyQuery(GENERATE_CSV_QUERY, { variables: { table: 'assetTypes'} })


	const showDeleteConfirm = (id) => {
		const assetTypeById=data?.assetTypes.find(assetType => assetType.id === id)
		{
			assetTypeById?.assigned 
			?
				errorIfAssigned()
			:
				confirm({
				title: 'Are you sure?',
				content: 'Do you really want to delete this Asset type? This process cannot be undone.',
				okText: 'Yes',
				okType: 'danger',
				cancelText: 'No',
				onOk() {
					deleteAssetType({ variables:  { deleteAssetTypeId: id } })
				},
				onCancel() {
					console.log('Cancel');
				},
				});
		}
	  }
	  const handleCsv = () => generateCSV(generateAssetTypeCSV)
	const [deleteAssetType, { error, data : deletedAssetType, loading : deleteLoading }] = useMutation(DELETE_ASSET_TYPE_MUTATION, {
		refetchQueries: [
			{ query: GET_ASSET_TYPES_QUERY },
		]
	});

	if(deletedAssetType){
        openNotificationWithIcon('deleteAssetType', 'success', "Asset type deleted successfully")
    }
	if(error) {
		alert(error);	
	}

	const columns = [...tableColumns, {
		title: 'ACTION',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<Tooltip title="Edit"><Link to={`/asset-types/edit/${record.id}`}><EditFilled style={{color: "blue"}}/></Link></Tooltip>
				<Tooltip title="Delete"><DeleteFilled style={{color: "red"}} onClick={() => showDeleteConfirm(record.id)}/></Tooltip>
			</Space>
		),
	}]

	return (
		<>
			{ (loading || deleteLoading ) && <Loader /> }
			<div className='text-center mb-3'>
                <h2 className='d-inline fs-4 fw-bold'>MANAGE ASSET TYPES</h2>
                <div className='add-button'>
			<Button type="primary" style={{ marginRight: 10 }} onClick={handleCsv}>EXPORT</Button>
                    <Link to={`/asset-types/add`}><Button type="primary">ADD</Button></Link>
                </div>
            </div>
			<Table bordered 
			       columns={columns} 
				   dataSource={data?.assetTypes.map(item => ({...item, key: item.id}))} 
				   pagination={false} />
		</>
	)
}

export default AssetTypesListing