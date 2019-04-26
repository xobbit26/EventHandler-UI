import { API_URL } from '../config';

export const CREATE_REQUEST_URL = `${API_URL}/api/create-request`;
export const GET_REQUESTS_URL = `${API_URL}/api/get-requests`;


const headers = {
    'content-type': 'application/json',
    'accept': 'application/json'
};


export const post = (url, data = {}, options = {}) => {

    const request = JSON.stringify(createRequest(data));
    options = {
        method: 'POST',
        body: request
    };

    return fetch(url, { ...options, headers })
        .then(response => console.log(response))
        .catch((error) => {
            throw error;
        });
}

export const get = (url, data = {}, options = {}) => {
    options = {
        method: 'GET'
    };
    
    return fetch(url, { ...options, headers })
        .then(response => console.log(response))
        .catch((error) => {
            throw error;
        });
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