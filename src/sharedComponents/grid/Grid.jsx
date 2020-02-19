import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Table, TablePagination } from '@material-ui/core/';
import tableStyles from './grid-styles';
import GridHeader from './GridHeader';
import GridBody from './GridBody';

class Grid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            rowsPerPage: 10
        };

        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
        this.onSort = this.onSort.bind(this);
        this.onRowClick = this.onRowClick.bind(this);
    };

    handleChangePage(event, page) {
        this.setState({ page });
    };

    handleChangeRowsPerPage(event) {
        this.setState({ rowsPerPage: event.target.value });
    };

    onSort(event) {
        const columnId = event.target.id;

        let order = 'desc';
        if (this.state.sortBy === columnId && this.state.order === 'desc') {
            order = 'asc';
        }

        this.setState({ order, columnId });
    };

    onRowClick(event) {
        console.log("event", event);
    };

    render() {
        const { classes, columns, data, sortBy, order } = this.props;
        const { page, rowsPerPage } = this.state;

        return (
            <div className={classes.tableWrapper}>
                <Table className={classes.table} aria-labelledby="tableTitle">
                    <GridHeader
                        columns={columns}
                        sortBy={sortBy}
                        order={order}
                        onSort={this.onSort}
                    />
                    <GridBody
                        columns={columns}
                        data={data}
                        sortBy={sortBy}
                        order={order}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        onRowClick={this.onRowClick}
                    />
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data.length}
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

Grid.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    sortBy: PropTypes.string,
    order: PropTypes.string
}

export default withStyles(tableStyles)(Grid)