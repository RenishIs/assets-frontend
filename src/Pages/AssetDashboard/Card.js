import { useState } from "react"
import { Card, Row, Input } from "antd"
import { PlusOutlined, CloseOutlined } from "@ant-design/icons"

const { TextArea } = Input;
const CustomCard = ({title}) => {

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
		<div style={{height: "100vh"}}>
			<Card className="dashboard-main-card">
				<div style={{ height: "100%", width: "514px" }}>
					<h2 className='d-inline fs-5 fw-bold'>{title}</h2>
					<div style={{width : '88%'}}>
					{
						data.map(item => (
							<div key={item.id} className='dashboard-card'>
								<p className="text-start fs-6 fw-bold">{item?.content}</p>
							</div>
						))
					}
					{
						addCard ? (
							<div style={{ width: "450px"}}>
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
			</Card>
		</div>
		
	)
}

export default CustomCard