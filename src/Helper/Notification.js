import { notification } from 'antd';

const openNotificationWithIcon = (key, type, message) => {
    notification[type]({
        key,
        message,
        description:''
    });
};

export default openNotificationWithIcon
  