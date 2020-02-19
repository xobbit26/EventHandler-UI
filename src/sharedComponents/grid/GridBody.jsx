import React, { Component } from 'react';
import { TableBody, TableCell, TableRow } from '@material-ui/core/';
import { stableSort, getSorting } from '../../utils/gridUtils';

class GridBody extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        const { data, order, sortBy, rowsPerPage, page, onRowClick } = this.props;

        return (
            <TableBody>
                {stableSort(data, getSorting(order, sortBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(n => {
                        return (
                            <TableRow
                                hover
                                onClick={onRowClick}
                                tabIndex={-1}
                                key={n.id}
                            >
                                <TableCell>{n.applicant}</TableCell>
                                <TableCell>{n.applyDateTime}</TableCell>
                                <TableCell>{n.description}</TableCell>
                                <TableCell>{n.responsible}</TableCell>
                                <TableCell>{n.eventStatusName}</TableCell>
                                <TableCell>{n.resolveDateTime}</TableCell>
                            </TableRow>
                        );
                    })}
            </TableBody>
        )
    }
}

export default GridBody;