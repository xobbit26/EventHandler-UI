import { API_URL } from '../config';

export const CREATE_REQUEST_URL = `${API_URL}/api/create-request`;

export const post = (url, data = {}, options = {}) => {
    console.log(`post url for create request: ${url}`);
    createRequest(data);
    console.log(requests);
    return true;
}

export const get = (url, data = {}, options = {}) => {
    console.log(`get url for get request: ${url}`);
    return requests;
}

const requests = [];

const createRequest = (data) => {
    let id = requests.length + 1;
    let request = {
        id: id,
        fio: data.fio,
        date: Date.now(),
        department: data.department,
        description: data.description,
        responsible: "",
        status: "В очереди",
        resolveDate: ""
    };

    requests.push(request);
}