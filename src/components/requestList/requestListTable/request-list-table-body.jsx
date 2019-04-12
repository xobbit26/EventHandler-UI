import React, { Component } from 'react';
import { TableBody, TableCell, TableRow, Checkbox } from '@material-ui/core/';

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

class Body extends Component {

    constructor(props) {
        super(props);
    };

    render() {

        const { handleClick, isSelected } = this.props.options;
        const { data, order, orderBy, rowsPerPage, page } = this.props.tableState;

        return (
            <TableBody>
                {stableSort(data, getSorting(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(n => {
                        return (
                            <TableRow
                                hover
                                onClick={event => handleClick(event, n.id)}
                                role="checkbox"
                                aria-checked={isSelected(n.id)}
                                tabIndex={-1}
                                key={n.id}
                                selected={isSelected(n.id)}
                            >
                                <TableCell padding="checkbox">
                                    <Checkbox checked={isSelected(n.id)} />
                                </TableCell>
                                <TableCell component="th" scope="row" padding="none">
                                    {n.fio}
                                </TableCell>
                                <TableCell align="left">{n.date}</TableCell>
                                <TableCell align="left">{n.description}</TableCell>
                                <TableCell align="left">{n.responsible}</TableCell>
                                <TableCell align="left">{n.resolveDate}</TableCell>
                            </TableRow>
                        );
                    })}
            </TableBody>
        )
    }
}

export default Body;