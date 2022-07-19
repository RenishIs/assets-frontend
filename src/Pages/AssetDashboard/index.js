import { useState, useEffect } from "react"
import { DragDropContext } from 'react-beautiful-dnd'
import { useMutation, useQuery } from "@apollo/client"
import { Modal, Input } from "antd"
import Column from "../../Components/Dashboard/Column"
import { GET_ASSETS_QUERY } from "../../gql/Query/Assets"
import { GET_ASSET_STATUS_QUERY } from "../../gql/Query/AssetStatus"
import Loader from "../../Components/UI/Loader"
import { UPDATE_ASSET_MUTATION } from "../../gql/Mutation/Assets"
import { GET_USER_ROLE } from "../../gql/Query/Users"
import { GET_USERS_BY_ROLE } from "../../gql/Query/Users"

const { TextArea } = Input;
const AssetDashboard = () => {

    const { data : assetStatus, loading : assetStatusLoading } = useQuery(GET_ASSET_STATUS_QUERY)
    const { data : role }= useQuery(GET_USER_ROLE)
	const { data : employeeList } = useQuery(GET_USERS_BY_ROLE, {
		variables: { 
			skip: !role, 
            roleId : role?.role?.filter((item) => item.name == "admin")[0].id
          }
	})

    const { data : assets, loading, error } = useQuery(GET_ASSETS_QUERY, {
        variables : { status : null}
    })
    const [ updateAssets ] = useMutation(UPDATE_ASSET_MUTATION, {
        refetchQueries : [
            {query: GET_ASSETS_QUERY} 
        ],
    })

    const [ data, setData ] = useState(null)
    const [ newToAssigned, setNewToAssigned] = useState(false)
    const [ employeeId, setEmployeeId ] = useState(null)
    const [ assignedToRepairBroken, setAssignedToRepairBroken ] = useState(false);
    const [ reason, setReason ] = useState('')
    const [ updatedAssetFields, setUpdatedAssetFields ] = useState(null)

    const handleCancel = () => {
        setAssignedToRepairBroken(false)
        setNewToAssigned(false)
    }

    const handleNewToAssigned = () => {
        const variables = { 
            ...updatedAssetFields.variables,
            input : {...updatedAssetFields?.variables?.input, employeeId}
        }
        setNewToAssigned(false)
        updateAssets({ variables })
    }

    const handleAssignedToRepairBroken = () => {
        setAssignedToRepairBroken(false)
        const variables = { 
            ...updatedAssetFields.variables,
            input : {...updatedAssetFields?.variables?.input, reason}
        }
        updateAssets({ variables })
    }

    const getTasksId = (status) => {
        const tasks = []
        assets?.assets?.filter(asset => asset?.assetStatus?.id === status.id)?.forEach(asset => {
            tasks.push(asset.id)
        })
        return tasks
    }

    useEffect(() => {
        const columns = {}
        assetStatus?.assetStatus.forEach(status => {
            columns[status.id] = {
                ...status,
                tasks : getTasksId(status)
            }
        })        

        const tasks = {}
        assets?.assets?.forEach(asset => {
            tasks[asset.id] = {...asset}
        })
        const data = {
            columns,
            tasks,
            columnOrder : assetStatus?.assetStatus.map(status => status.id)
        }
        setData(data)
    }, [ assetStatus, assets ])
    
    const onDragEnd = (result) => {
        const {destination, source, draggableId } = result;

        const movedAsset = assets?.assets?.find(asset => asset.id === draggableId)
        const updatedAssetFields = {
            variables : {
                updateAssetsId : draggableId,
                input : {
                    assetStatus : destination.droppableId,
                    employeeId : movedAsset?.employeeId.id,
                    dateOfAssetAssignment : movedAsset?.dateOfAssetAssignment
                }
            }
        }

        if(!destination){
            return
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return
        }

        const start = data?.columns[source.droppableId]
        const finish = data?.columns[destination.droppableId]
        
        if(start == finish){
            const newTasks = Array.from(start.tasks)
            newTasks.splice(source.index, 1)
            newTasks.splice(destination.index, 0, draggableId)
    
            const newColumn = {
                ...start,
                tasks : newTasks
            }
    
            setData((prevState) => ({
                ...prevState,
                columns : {
                    ...prevState.columns,
                    [newColumn.id] : newColumn
                }
            }))
        }
        
        // //moving from one list to another
        const startTasks = Array.from(start.tasks)
        startTasks.splice(source.index, 1)
        const newStartColumn = {
            ...start,
            tasks : startTasks
        }

        const destinationTasks = Array.from(finish.tasks)
        destinationTasks.splice(destination.index, 0, draggableId)
        const newDestincationColumn = {
            ...finish,
            tasks : destinationTasks
        }
        setData((prevState) => ({
            ...prevState,
            columns : {
                ...prevState.columns,
                [newStartColumn.id] : newStartColumn,
                [newDestincationColumn.id] : newDestincationColumn
            }
        }))
        setUpdatedAssetFields(updatedAssetFields)

        if(data?.columns[source.droppableId].name == 'New' && data?.columns[destination.droppableId].name == 'Assigned'){
            setNewToAssigned(true)
            return
        }
        if(data?.columns[source.droppableId].name == 'Assigned' && (data?.columns[destination.droppableId].name == 'Broken' || data?.columns[destination.droppableId].name == 'In-Repair')){
            setAssignedToRepairBroken(true);
            return
        }
        updateAssets(updatedAssetFields)
    }

    return (
        <>
        <h2 className='text-start ms-2 fs-4 fw-bold'>ASSET DASHBOARD</h2>
        {
            newToAssigned && (
                <Modal title="Select Employee" visible={newToAssigned} onOk={handleNewToAssigned} onCancel={handleCancel}>
                    <select className="form-input" onChange={(e) => setEmployeeId(e.target.value)}>
                    <option>Select Type</option>
                    {
                        employeeList && employeeList?.usersByRole?.map(item => (
                            <option value={item.id} key={item.id}>{item.firstName} {item.lastName}</option>
                        ))
                    }
                    </select>
                </Modal>
            )
        }
        {
            assignedToRepairBroken && (
                <Modal title="Reason for Broken Asset" visible={assignedToRepairBroken} onOk={handleAssignedToRepairBroken} onCancel={handleCancel}>
                    <TextArea rows={4} placeholder="specify the reason..." onChange={(e) => setReason(e.target.value)} value={reason}/>
                </Modal>  
            )
        }
        <DragDropContext onDragEnd={onDragEnd}>
            { assetStatusLoading || loading && <Loader />}
            <div className="dashboard-container" style={{width : '100%', overflow : 'auto'}}>
            {
                data?.columnOrder?.map(colId => {
                    const column = data?.columns[colId]
                    const tasks = column.tasks.map(taskId => data?.tasks[taskId])
                    return <Column key={colId} column={column} tasks={tasks}/>
                })
            }
            </div>
        </DragDropContext>
        </>
    )
}

export default AssetDashboard