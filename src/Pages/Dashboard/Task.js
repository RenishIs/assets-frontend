import { Draggable } from 'react-beautiful-dnd'

const Task = ({ task, index }) => {
    return (
        <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => {
            const bgColor = snapshot.isDragging ? '#021a30' : 'green'
            return (
                <div className={`dashboard-task-container ${snapshot.isDragging ? 'bg-primary' : 'bg-white'} `}
                     style={{ backgroundColor : bgColor}}
                     {...provided.draggableProps} 
                     {...provided.dragHandleProps} 
                     ref={provided.innerRef}
                     isDragging={snapshot.isDragging}
                >
                    {task.content}
                </div>
        )}}
        </Draggable>  
    )
}

export default Task