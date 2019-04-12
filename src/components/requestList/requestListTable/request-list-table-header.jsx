import React, { Component } from 'react';
import { TableCell, TableHead, TableRow, TableSortLabel, Checkbox, Tooltip } from '@material-ui/core/';


class TableHeader extends Component {

    constructor(props) {
        super(props);
    };

    createSortHandler = property => event => {
        this.props.options.onRequestSort(event, property);
    };

    render() {

        const { onSelectAllClick, order, orderBy } = this.props.options;
        const numSelected = this.props.tableState.selected.length;
        const rowCount = this.props.tableState.data.length;
        const { columns } = this.props.tableState;

        return (
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox">
                        <Checkbox
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={numSelected === rowCount}
                            onChange={onSelectAllClick}
                        />
                    </TableCell>
                    {columns.map(
                        column => (
                            <TableCell
                                key={column.id}
                                align='left'
                                padding={column.disablePadding ? 'none' : 'default'}
                                sortDirection={orderBy === column.id ? order : false}
                            >
                                <Tooltip
                                    title="Sort"
                                    placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                                    enterDelay={300}
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