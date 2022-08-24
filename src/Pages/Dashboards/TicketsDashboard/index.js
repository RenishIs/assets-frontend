import { useState, useEffect, useCallback } from "react"
import { DragDropContext } from 'react-beautiful-dnd'
import { useMutation, useQuery } from '@apollo/client';
import { Modal, Input, Row, Col } from "antd"
import { GET_ALL_TICKETS_QUERY } from '../../../gql/Query/AllTickets';
import { GET_TICKETS_STATUS_QUERY } from '../../../gql/Query/TicketsStatus';
import { UPDATE_TICKET_MUTATION } from "../../../gql/Mutation/Tickets";
import Column from "../../../Components/Dashboard/Column";
import TicketDetails from "./TicketDetails";

const { TextArea } = Input;
const TicketDashboard = () => {

    const [ data, setData ] = useState(null)
    const [ isModalVisible, setIsModalVisible ] = useState(false)
    const [ note, setNote ] = useState('')
    const [ updatedTicketFields, setUpdatedTicketFields ] = useState(null)
    const [ showTicketDeatils, setShowTicketDetails ] = useState(false)
    const [ ticket, setTicket ] = useState(null)
    const [ searchText, setSearchText ] = useState('')
    const [ searchTickets, setSearchTickets ] = useState(false)

    const { data : ticketStatus } = useQuery(GET_TICKETS_STATUS_QUERY);
	const { data : tickets } = useQuery(GET_ALL_TICKETS_QUERY,{ variables : { input: null,  page: 0 }})
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
    
    const getTasksId = (status, data, searchText) => {
        const tasks = []
        let filteredByStatus = data?.filter(item => item?.status?.id === status.id)
        if(searchText){
            const search = (ticket) => {
                const username = ticket?.raisedBy?.firstName?.toLowerCase() + ticket?.raisedBy?.lastName?.toLowerCase()
                const ticketNo = ticket?.ticketId?.toLowerCase()
                const empCode = ticket?.raisedBy?.employeeCode?.toLowerCase()
                return username?.includes(searchText) || ticketNo?.includes(searchText) || empCode?.includes(searchText)
            }
            filteredByStatus = filteredByStatus.filter(ticket => search(ticket))
        }
        filteredByStatus?.forEach(item => {
            tasks.push(item.id)
        })
        return tasks
    }

    useEffect(() => {
        const columns = {}
        ticketStatus?.ticketStatus.forEach(status => {
            columns[status.id] = {
                ...status,
                tasks : getTasksId(status, tickets?.tickets?.tickets, searchText)
            }
        })        

        const tasks = {}
        tickets?.tickets?.tickets?.forEach(asset => {
            tasks[asset.id] = {...asset}
        })
        const data = {
            columns,
            tasks,
            columnOrder : ticketStatus?.ticketStatus.map(status => status.id)
        }
        setData(data)
    }, [ ticketStatus, tickets, searchTickets ])

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

        if(data?.columns[source.droppableId].name == 'New' && data?.columns[destination.droppableId].name == 'In-progress'){
            setIsModalVisible(true)
            return
        }
        if(data?.columns[source.droppableId].name == 'In-progress' && data?.columns[destination.droppableId].name == 'Resolved'){
            setIsModalVisible(true)
            return
        }

        updateTicket({variables : { updateTicketId : draggableId, input : { status : destination.droppableId}}})
    }

    const ticketDetails = (data) => {
        setShowTicketDetails(true)
        setTicket(data)
    }

    const handleCloseTicketDetails = () => {
        setShowTicketDetails(false)
        setTicket(null)
    }

    const debounce = (func) => {
        let timer
        return (...args) => {
            const context = this
            if(timer) clearTimeout(timer)
            timer = setTimeout(() => {
                timer = null
                func.apply(context, args)
            }, 500)
        }
    }

    const handleSearch = (value) => {
        setSearchText(value.trim().toLowerCase())
        setSearchTickets((prevState) => !prevState)
    }

    const optimisedSearch = useCallback(debounce(handleSearch), [])

    return (
        <>
        <Row>
            <h2 className='text-start ms-2 fs-4 fw-bold'>TICKET DASHBOARD</h2>
            <Col span={1}/>
            <Col span={9}>
                <Input placeholder="Search by employee name, code or ticket number" 
                       onChange={(e) => optimisedSearch(e.target.value)}/>
            </Col>
        </Row>
        {
            isModalVisible && (
                <Modal title="Add Notes" visible={isModalVisible} onOk={handleUpdateTicket} onCancel={handleCancel}>
                    <TextArea rows={4} 
                              placeholder="Add note here..." 
                              onChange={(e) => setNote(e.target.value)} 
                              value={note}
                              maxLength={200}/>
                </Modal>
            )
        }
        {
            showTicketDeatils && (
                <Modal title="Ticket Details" visible={showTicketDeatils} onOk={handleCloseTicketDetails} onCancel={handleCloseTicketDetails}>
                    <TicketDetails data={ticket}/>
                </Modal>
            )
        }
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="dashboard-container" style={{width : '100%', overflow : 'auto'}}>
            {
                data?.columnOrder?.map(colId => {
                    const column = data?.columns[colId]
                    const tasks = column.tasks.map(taskId => data?.tasks[taskId])
                    return <Column key={colId} 
                                   column={column} 
                                   tasks={tasks} 
                                   ticketDetails={ticketDetails}/>
                })
            }
            </div>
        </DragDropContext>
        </>
    )
}

export default TicketDashboard