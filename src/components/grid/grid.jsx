import React, { Component } from 'react';
import { withStyles, Table, TablePagination } from '@material-ui/core/';
import tableStyles from './grid-styles';
import GridHeader from './grid-header';
import GridBody from './grid-body';

const tableColumns = [
    { id: 'applicant', numeric: false, disablePadding: false, label: 'ФИО подавшего заявку' },
    { id: 'applyDateTime', numeric: false, disablePadding: false, label: 'Дата и время подачи' },
    { id: 'descripton', numeric: false, disablePadding: false, label: 'Описание' },
    { id: 'responsible', numeric: false, disablePadding: false, label: 'Ответственный' },
    { id: 'eventStatusName', numeric: false, disablePadding: false, label: 'Статус' },
    { id: 'resolveDateTime', numeric: false, disablePadding: false, label: 'Дата и время выполнения' },
];

class Grid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: tableColumns,
            order: 'asc',
            orderBy: 'applicant',
            data: this.props.tableData,
            page: 0,
            rowsPerPage: 10
        };
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
        const { classes } = this.props;

        const headerOptions = {
            onRequestSort: this.handleRequestSort
        };

        const bodyOptions = {
            handleClick: this.handleClick
        };

        return (
            <div className={classes.tableWrapper}>
                <Table className={classes.table} aria-labelledby="tableTitle">
                    <GridHeader tableState={this.state} options={headerOptions} />
                    <GridBody tableState={this.state} options={bodyOptions} />
                </Table>
                {/* <TablePagination
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
                /> */}
            </div>

        )
    }
}

export default withStyles(tableStyles)(Grid)