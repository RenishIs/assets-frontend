import { Draggable } from 'react-beautiful-dnd'
import { Tag } from 'antd';

const Task = ({ task, index }) => {
    return (
        <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => {
            const bgColor = snapshot.isDragging ? '#021a30' : 'green'
            return (
                <div className={`dashboard-task-container shadow-sm ${snapshot.isDragging ? 'bg-primary' : 'bg-white'} `}
                     style={{ backgroundColor : bgColor}}
                     {...provided.draggableProps} 
                     {...provided.dragHandleProps} 
                     ref={provided.innerRef}>
                        {task.__typename == 'Assets' && <div>
                            <div className='fw-bold' style={{fontSize:"14px"}}>{task.name}</div>
                            <div className='mb-1' style={{fontSize:"14px"}}>{task.description}</div>
                            { 
									(task?.assetStatus?.name == 'In-stock' || task?.assetStatus?.name == 'New' || task?.assetStatus?.name == 'Assigned' || task?.assetStatus?.name == 'In-Repair' || task?.assetStatus?.name == 'Broken') 
									?
									(<span>
										{task?.assetStatus?.name == 'In-stock' && <Tag color="geekblue">{task?.assetStatus?.name}</Tag>}
										{task?.assetStatus?.name == 'New' && <Tag color="cyan">{task?.assetStatus?.name}</Tag>}
										{task?.assetStatus?.name == 'Assigned' && <Tag color="success">{task?.assetStatus?.name}</Tag>}
										{task?.assetStatus?.name == 'In-Repair' && <Tag color="processing">{task?.assetStatus?.name}</Tag>}
										{task?.assetStatus?.name == 'Broken' && <Tag color="error">{task?.assetStatus?.name}</Tag>}
									</span>) 
									:
									(<span><Tag color="purple">{task?.assetStatus?.name}</Tag></span>)
								}
                            <div className='d-flex justify-content-between mt-2'>
                                <div className='text-muted' style={{fontSize:"12px"}}>{task?.assetId}</div>
                                <div style={{fontSize:"13px"}}>{task?.employeeId?.firstName}</div>
                            </div>
                        </div>}
                        {task.__typename == 'Ticket' && <div>
                            <div className='' style={{fontSize:"16px"}}>{task.title}</div>
                            <div className='mb-1' style={{fontSize:"14px"}}>{task.description}</div>
                            { 
                                (task?.status?.name == 'New' || task?.status?.name == 'In-progress' || task?.status?.name == 'Resolved') 
                                ?
                                (<span>
                                    {task?.status?.name == 'New' && <Tag color="cyan">{task?.status?.name}</Tag>}
                                    {task?.status?.name == 'In-progress' && <Tag color="processing">{task?.status?.name}</Tag>}
                                    {task?.status?.name == 'Resolved' && <Tag color="success">{task?.status?.name}</Tag>} 
                                </span>) 
                                :
                                (<span><Tag color="purple">{task?.status?.name}</Tag></span>)
                            }
                            <div className='d-flex justify-content-between mt-2'>
                                <div className='text-muted' style={{fontSize:"12px"}}>{task?.ticketId}</div>
                                <div style={{fontSize:"13px"}}>{task?.assignedTo?.firstName}</div>
                            </div>
                        </div>}
                </div>
        )}}
        </Draggable>  
    )
}

export default Task