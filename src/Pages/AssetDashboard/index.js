import { useState, useEffect } from "react"
import { DragDropContext } from 'react-beautiful-dnd'
import { useMutation, useQuery } from "@apollo/client"
import Column from "./Column"
import { GET_ASSETS_QUERY } from "../../gql/Query/Assets"
import { GET_ASSET_STATUS_QUERY } from "../../gql/Query/AssetStatus"
import Loader from "../../Components/UI/Loader"
import { UPDATE_ASSET_MUTATION } from "../../gql/Mutation/Assets"

const AssetDashboard = () => {

    const { data : assetStatus, loading : assetStatusLoading } = useQuery(GET_ASSET_STATUS_QUERY)
    const { data : assets, loading, error } = useQuery(GET_ASSETS_QUERY, {
        variables : { status : null}
    })
    const [ updateAssets, { data: updatedData, loading : editLoading }] = useMutation(UPDATE_ASSET_MUTATION, {
        refetchQueries : { query : GET_ASSETS_QUERY }
    })

    const [ data, setData ] = useState(null)

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
    }, [loading, assetStatusLoading])
    
    const onDragEnd = (result) => {
        const {destination, source, draggableId } = result;
        const movedAsset = {...assets?.assets?.find(asset => asset.id === draggableId), assetStatus : assetStatus?.assetStatus.find(status => status.id === destination.droppableId) }
        
        if(!destination){
            return
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return
        }

        updateAssets({ variables: { updateAssetsId: movedAsset.id, input: { ...movedAsset } } })

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
        
        //moving from one list to another
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
    }

    return (
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
    )
}

export default AssetDashboard