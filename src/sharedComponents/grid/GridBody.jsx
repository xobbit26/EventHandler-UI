import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TableBody, TableCell, TableRow } from '@material-ui/core/';
import { stableSort, getSorting, getCellValue } from '../../utils/gridUtils';

class GridBody extends PureComponent {

    constructor(props) {
        super(props);
    };

    render() {
        const { data, columns, order, sortBy, onRowClick } = this.props;

        return (
            <TableBody>
                {stableSort(data, getSorting(order, sortBy))
                    .map(row => {
                        return (
                            <TableRow
                                hover
                                onClick={onRowClick}
                                tabIndex={-1}
                                key={row.id}
                            >
                                {columns.map((column) => {
                                    return (
                                        <TableCell key={row.id, column.id}>
                                            {getCellValue(row, column)}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        );
                    })}
            </TableBody>
        )
    }
}

GridBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    sortBy: PropTypes.string,
    order: PropTypes.string,
    onRowClick: PropTypes.func
}

export default GridBody;