import { API_URL } from '../config';

export const CREATE_EVENT_URL = `${API_URL}/api/event`;
export const GET_EVENTS_URL = `${API_URL}/api/event`;


const headers = {
    'content-type': 'application/json',
    'accept': 'application/json'
};


export const post = (url, data = {}, options = {}) => {

    const event = JSON.stringify(createEvent(data));
    options = {
        method: 'POST',
        body: event
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

const createEvent = (data) => {
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