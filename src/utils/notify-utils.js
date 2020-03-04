import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultNotificationDelay = 5000

export const toastConfigInit = () => {
    toast.configure({
        position: "top-right",
        autoClose: defaultNotificationDelay,
        hideProgressBar: true
    });
}

export const notify = (text, type, delay = defaultNotificationDelay) => {
    switch (type) {
        case "success": toast.success(text, { autoClose: delay });
            break;
        case "error": toast.error(text, { autoClose: delay });
            break;
        case "info": toast.info(text, { autoClose: delay });
            break;
        default: toast.error(text, { autoClose: delay });
    };
}