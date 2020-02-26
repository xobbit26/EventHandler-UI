import { toDateTimeFormat } from './dateTimeUtils';

export const stableSort = (array, cmp) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

export const getSorting = (order, sortBy) => {
    return order === 'desc' ? (a, b) => desc(a, b, sortBy) : (a, b) => -desc(a, b, sortBy);
}

export const getCellValue = (row, column) => {
    switch (column.columnType) {
        case 'date_time':
            return toDateTimeFormat(row[column.id]);
        default:
            return row[column.id];
    }
}

const desc = (a, b, sortBy) => {
    if (b[sortBy] < a[sortBy]) {
        return -1;
    }
    if (b[sortBy] > a[sortBy]) {
        return 1;
    }
    return 0;
}