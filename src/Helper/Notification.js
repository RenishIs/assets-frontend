import { notification } from 'antd';

const openNotificationWithIcon = (type, message) => {
    notification[type]({
        message: message,
        description:''
    });
};

export default openNotificationWithIcon
  