import React, { Component } from 'react';
import { withStyles, Table, TablePagination } from '@material-ui/core/';
import TableHeader from './request-list-table-header';
import TableBody from './request-list-table-body';
import tableStyles from './table-styles';

const tableColumns = [
    { id: 'fio', numeric: false, disablePadding: false, label: 'ФИО подавшего заявку' },
    { id: 'date', numeric: false, disablePadding: false, label: 'Дата и время подачи' },
    { id: 'descripton', numeric: false, disablePadding: false, label: 'Описание' },
    { id: 'responsible', numeric: false, disablePadding: false, label: 'Ответственный' },
    { id: 'status', numeric: false, disablePadding: false, label: 'Статус' },
    { id: 'resolve-date', numeric: false, disablePadding: false, label: 'Дата и время выполнения' },
];

class RequestListTable extends Component {

    constructor(props) {
        super(props);
    };

    state = {
        columns: tableColumns,
        order: 'asc',
        orderBy: 'fio',
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

    handleClick = (event, id) => {
        console.log("handle click");
    };

    render() {
        const { tableData, classes } = this.props;

        const headerOptions = {
            onRequestSort: this.handleRequestSort
        };

        const bodyOptions = {
            handleClick: this.handleClick
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