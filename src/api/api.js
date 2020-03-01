import { API_URL } from '../configuration/config';

export const REQUEST_TRANSLATIONS_URL = `${API_URL}/api/resource`;
export const CREATE_EVENT_URL = `${API_URL}/api/event`;
export const REQUEST_EVENTS_URL = `${API_URL}/api/event/grid-data`;


const headers = {
    'content-type': 'application/json',
    'accept': 'application/json'
};


const post = (url, data = {}, options = {}) => {

    const jsonData = JSON.stringify(data);
    options = {
        method: 'POST',
        body: jsonData
    };

    return fetch(url, { ...options, headers })
        .then(response => console.log(response))
        .catch((error) => {
            throw error;
        });
}

const get = (url, data = {}, options = {}) => {
    options = {
        method: 'GET'
    };

    return fetch(url, { ...options, headers })
        .then((response) => response.json())
        .catch((error) => {
            throw error;
        });
}

export const api = {
    post,
    get
}