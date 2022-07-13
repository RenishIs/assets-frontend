import { Droppable } from 'react-beautiful-dnd'
import Task from "./Task"
import { useState } from "react"
import { Card, Row, Input } from "antd"
import { PlusOutlined, CloseOutlined } from "@ant-design/icons"

const { TextArea } = Input;
const Column = ({column, tasks}) => {
    const [ addCard, setAddCard ] = useState(false)
	const [ content, setContent ] = useState('')
	const [ data, setData ] = useState([])

	const addInnerCard = () => setAddCard(true)
	const cancel = () => {
		setAddCard(false)
		setContent('')
	}

	const addCardRecord = () => {
		if(content.trim()){
			const newRecord = {
				id : data?.length + 1,
				content : content
			}
			setData([...data, newRecord])
			setContent('')
		}
	}
    return (
        <div className="dashboard-column-container">
            <div style={{ height: "100%", width: "320px", padding : '4%' }}>
                <h2 className='d-inline fs-5 fw-bold px-4'>{column.title}</h2>
                <Droppable droppableId={column.id}>
                {
                    
                    (provided, snapshot) => (
                        <div className={`dashboard-tasklist-container ${snapshot.isDraggingOver ? 'bg-warning' : 'bg-white'}`} 
                             {...provided.droppableProps} 
                             ref={provided.innerRef} 
                             isDraggingOver={snapshot.isDraggingOver}>
                        {
                            tasks?.map((task, index) => (
                                <Task key={task.id} task={task} index={index}/>
                            ))
                        }
                        {provided.placeholder}
                        </div>
                )}
                </Droppable>
                {
                    addCard ? (
                        <div style={{ width: "100%"}}>
                            <TextArea rows={4} 
								      placeholder="Enter the title for this card" 
								 	  value={content}
                                      onChange={(e) => setContent(e.target.value)} />
                            <Row align="middle" className="mt-2" >
                                <span className="px-2 dashboard-card-inner-add-button" onClick={addCardRecord}>
                                    Add Card
                                </span>
                                <span onClick={cancel} className='px-1'>
                                    <CloseOutlined style={{fontSize : '25px'}}/>
                                </span>
                            </Row>
                        </div>
						) : (
							<Row align="middle" className="dashboard-card-add-button" onClick={addInnerCard}>
								<PlusOutlined /> 
								<span className="px-2">Add a Card</span>
							</Row>
						)
					}
            </div>
        </div>
    )
}

export default Column