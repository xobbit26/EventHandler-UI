import React, { Component } from 'react';
import { TableCell, TableHead, TableRow, TableSortLabel, Tooltip } from '@material-ui/core/';


class TableHeader extends Component {

    constructor(props) {
        super(props);
    };

    createSortHandler = property => event => {
        this.props.options.onRequestSort(event, property);
    };

    render() {

        const { order, orderBy } = this.props.options;
        const { columns } = this.props.tableState;

        return (
            <TableHead>
                <TableRow>
                    {columns.map(
                        column => (
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
                                        active={orderBy === column.id}
                                        direction={order}
                                        onClick={this.createSortHandler(column.id)}
                                    >
                                        {column.label}
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                        ),
                        this,
                    )}
                </TableRow>
            </TableHead>
        )
    }
}

export default TableHeader;