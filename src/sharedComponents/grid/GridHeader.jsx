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
                            align={column.numeric ? 'right' : 'left'}
                            padding={column.disablePadding ? 'none' : 'default'}
                            sortDirection={orderBy === column.id ? order : false}
                        >
                            <Tooltip
                                title="Sort"
                                placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                                enterDelay={200}
                            >
                                <TableSortLabel
                                    id={column.id}
                                    active={orderBy === column.id}
                                    direction={order}
                                    onClick={onSort}
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