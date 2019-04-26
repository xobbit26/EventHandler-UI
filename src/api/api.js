import { API_URL } from '../config';

export const CREATE_REQUEST_URL = `${API_URL}/api/create-request`;

export const post = (url, data = {}, options = {}) => {

    const request = JSON.stringify(createRequest(data));
    options = {
        method: 'POST',
        body: request
    };

    const headers = {
        'content-type': 'application/json',
        'accept': 'application/json'
    };

    return fetch(url, { ...options, headers })
        .then(response => console.log(response))
        .catch((error) => {
            throw error;
        });
}

export const get = (url, data = {}, options = {}) => {
    console.log(`get url for get request: ${url}`);
    return requests;
}

const createRequest = (data) => {
    return {
        fio: data.fio,
        date: Date.now(),
        department: data.department,
        description: data.description,
        responsible: "",
        status: "В очереди",
        resolveDate: ""
    };
}