import React, { Component } from 'react';
import { withStyles, Table, TablePagination } from '@material-ui/core/';

import TableHeader from './request-list-table-header';
import TableBody from './request-list-table-body';

import tableStyles from './table-styles';

const tableColumns = [
    { id: 'fio', numeric: false, disablePadding: true, label: 'ФИО подавшего заявку' },
    { id: 'date', numeric: false, disablePadding: false, label: 'Время подачи' },
    { id: 'descripton', numeric: false, disablePadding: false, label: 'Текст заявки' },
    { id: 'responsible', numeric: false, disablePadding: false, label: 'Ответственный' },
    { id: 'resolve-date', numeric: false, disablePadding: false, label: 'Время выполнения' },
];

class RequestListTable extends Component {

    constructor(props) {
        super(props);
    };

    state = {
        columns: tableColumns,
        order: 'asc',
        orderBy: 'fio',
        selected: [],
        data: this.props.tableData,
        page: 0,
        rowsPerPage: 10
    };

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };

    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';

        if (this.state.orderBy === property && this.state.order === 'desc') {
            order = 'asc';
        }

        this.setState({ order, orderBy });
    };

    handleSelectAllClick = event => {
        if (event.target.checked) {
            this.setState(state => ({ selected: state.data.map(n => n.id) }));
            return;
        }
        this.setState({ selected: [] });
    };

    handleClick = (event, id) => {
        const { selected } = this.state;
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        this.setState({ selected: newSelected });
    };

    isSelected = id => this.state.selected.indexOf(id) !== -1;

    render() {
        const { tableData, classes } = this.props;

        const headerOptions = {
            onSelectAllClick: this.handleSelectAllClick,
            onRequestSort: this.handleRequestSort
        };

        const bodyOptions = {
            handleClick: this.handleClick,
            isSelected: this.isSelected
        };

        return (
            <div className={classes.tableWrapper}>
                <Table className={classes.table} aria-labelledby="tableTitle">
                    <TableHeader tableState={this.state} options={headerOptions} />
                    <TableBody tableState={this.state} options={bodyOptions} />
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={tableData.length}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </div>

        )
    }
}

export default withStyles(tableStyles)(RequestListTable)