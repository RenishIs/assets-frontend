import { useState, useEffect } from "react"
import { DragDropContext } from 'react-beautiful-dnd'
import { useMutation, useQuery } from '@apollo/client';
import { Modal, Input } from "antd"
import { GET_ALL_TICKETS_QUERY } from '../../gql/Query/AllTickets';
import { GET_TICKETS_STATUS_QUERY } from '../../gql/Query/TicketsStatus';
import { UPDATE_TICKET_MUTATION } from "../../gql/Mutation/Tickets";
import Column from "../../Components/Dashboard/Column";

const { TextArea } = Input;
const TicketDashboard = () => {

    const [ data, setData ] = useState(null)
    const [ isModalVisible, setIsModalVisible ] = useState(false)
    const [ note, setNote ] = useState('')
    const [ updatedTicketFields, setUpdatedTicketFields ] = useState(null)

    const { data : ticketStatus } = useQuery(GET_TICKETS_STATUS_QUERY);
	const { data : tickets } = useQuery(GET_ALL_TICKETS_QUERY,{ variables : { input: null }})
    const [ updateTicket ] = useMutation(UPDATE_TICKET_MUTATION)

    const handleCancel = () => {
        setIsModalVisible(false)
        setNote('')
    }

    const handleUpdateTicket = () => {
        const variables = { 
            ...updatedTicketFields.variables,
            input : {...updatedTicketFields?.variables?.input, note}
        }
        updateTicket({ variables })
        setIsModalVisible(false)
        setNote('')
    }
    
    const getTasksId = (status, data) => {
        const tasks = []
        data?.filter(item => item?.status?.id === status.id)?.forEach(item => {
            tasks.push(item.id)
        })
        return tasks
    }

    useEffect(() => {
        const columns = {}
        ticketStatus?.ticketStatus.forEach(status => {
            columns[status.id] = {
                ...status,
                tasks : getTasksId(status, tickets?.tickets)
            }
        })        

        const tasks = {}
        tickets?.tickets?.forEach(asset => {
            tasks[asset.id] = {...asset}
        })
        const data = {
            columns,
            tasks,
            columnOrder : ticketStatus?.ticketStatus.map(status => status.id)
        }
        setData(data)
    }, [ ticketStatus, tickets ])

    const onDragEnd = (result) => {
        const {destination, source, draggableId } = result;
        
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

        const updatedTicketFields = {
            variables : {
                updateTicketId : draggableId,
                input : {
                    status : destination.droppableId
                }
            }
        }
        
        setUpdatedTicketFields(updatedTicketFields)
        setData((prevState) => ({
            ...prevState,
            columns : {
                ...prevState.columns,
                [newStartColumn.id] : newStartColumn,
                [newDestincationColumn.id] : newDestincationColumn
            }
        }))

        if(data?.columns[source.droppableId].name == 'New' && data?.columns[destination.droppableId].name == 'In-Progress'){
            setIsModalVisible(true)
            return
        }
        if(data?.columns[source.droppableId].name == 'In-Progress' && data?.columns[destination.droppableId].name == 'Resolved'){
            setIsModalVisible(true)
            return
        }

        updateTicket({variables : { updateTicketId : draggableId, input : { status : destination.droppableId}}})
    }

    return (
        <>
        {
            isModalVisible && (
                <Modal title="Add Notes" visible={isModalVisible} onOk={handleUpdateTicket} onCancel={handleCancel}>
                    <TextArea rows={4} 
                              placeholder="Add note her..." 
                              onChange={(e) => setNote(e.target.value.trim())} 
                              value={note}
                              maxLength={200}/>
                </Modal>
            )
        }
        <DragDropContext onDragEnd={onDragEnd}>
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

export default TicketDashboard