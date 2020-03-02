import React, { Component } from 'react';
import {
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    Tooltip
} from '@material-ui/core/';

class GridHeader extends Component {

    constructor(props) {
        super(props);
    };

    render() {

        const { columns, orderBy, order, onSort } = this.props;

        return (
            <TableHead>
                <TableRow>
                    {columns.map(column => (
                        <TableCell
                            key={column.id}
                            sortDirection={orderBy === column.sortKey ? order : false}
                        >
                            <Tooltip
                                title="Sort"
                                placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                                enterDelay={200}
                            >
                                <TableSortLabel
                                    id={column.sortKey}
                                    active={orderBy === column.sortKey}
                                    direction={order}
                                    onClick={() => onSort(column.sortKey)}
                                >
                                    {column.label}
                                </TableSortLabel>
                            </Tooltip>
                        </TableCell>
                    ), this)}
                </TableRow>
            </TableHead>
        )
    }
}

export default GridHeader;