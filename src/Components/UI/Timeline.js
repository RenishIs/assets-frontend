import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const Timeline = ({data}) => {
    const history = useHistory()
    return (
        <VerticalTimeline>
        {
            data?.map(item => (
                <VerticalTimelineElement className="vertical-timeline-element--work"
                                         key={item.id}
                                         contentStyle={{ background: '#001529' }}
                                         contentArrowStyle={{ borderRight: '7px solid #001529' }}
                                         icon={<UserOutlined />}
                                         iconStyle={{ background: '#001529', color: '#fff', padding : 18 }}
                                         lineColor={'#001529'}
                                         onTimelineElementClick={() => history.push(`/users/${item.id}`)}>
                <h3 className="vertical-timeline-element-title text-white fs-6">{item?.username}</h3>
            </VerticalTimelineElement>
            ))
        }            
        </VerticalTimeline>
    )
}

export default Timeline