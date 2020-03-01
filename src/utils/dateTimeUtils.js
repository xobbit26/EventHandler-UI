import moment from 'moment';

export const toDateTimeFormat = (value) => {
    return moment(value).format('lll');
}