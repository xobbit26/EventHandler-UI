import { REQUEST_EVENTS_URL, api } from './api';
import i18next from 'i18next';

export const getEventsGridData = (page, rowsPerPage, orderBy, order) => {
    //TODO: After creating loader it needt to get language parameter from i18next api
    console.log("i18next.language", i18next.language);
    const language = 'en';

    const skip = page * rowsPerPage;
    const url = `${REQUEST_EVENTS_URL}/${language}?skip=${skip}&take=${rowsPerPage}&orderBy=${orderBy}&direction=${order}`;

    return api.get(url);
}