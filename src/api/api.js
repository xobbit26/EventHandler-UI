import i18n from '../configuration/i18n';
import { notify } from '../utils/notify-utils';

import { API_URL } from '../configuration/config';
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
        .then(handleErrors)
        .then(handleResponse)
        .catch((ex) => { throw ex; });
}

const handleResponse = (response) => {
    return response.json();
}

const handleErrors = (response) => {
    return response.ok
        ? response
        : response.text()
            .then((e) => throwNetworkError(e, response));
}

const throwNetworkError = (remoteError, response) => {
    switch (response.status) {
        // case 401: throw new AuthError(remoteError.message);
        // case 403: throw new ForbiddenError(remoteError.message);
        // case 404: throw new NotFoundError(remoteError.message);
        // case 400: throw new BadRequestError(remoteError.message);
        default: {
            notify(i18n.t('ErrorMessage_InternalServer'), 'error');
            throw new Error(remoteError.message);
        };
    }
};

export const api = {
    post,
    get
}