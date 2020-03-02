import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridHeader from './GridHeader';
import GridBody from './GridBody';
import { withStyles, Table, TablePagination } from '@material-ui/core/';
import tableStyles from './grid-styles';

class Grid extends Component {

    constructor(props) {
        super(props);

        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
        this.onSort = this.onSort.bind(this);
        this.onRowClick = this.onRowClick.bind(this);
    };

    handleChangePage(event, page) {
        const { rowsPerPage, orderBy, order } = this.props;
        this.props.onChangePage(page, rowsPerPage, orderBy, order);
    };

    handleChangeRowsPerPage(event) {
        const { page, orderBy, order } = this.props;
        this.props.onChangeRowsNumber(page, event.target.value, orderBy, order);
    };

    onSort(sortKey) {
        const { page, rowsPerPage, orderBy, order } = this.props;
        const newOrder = orderBy === sortKey && order === 'desc' ? 'asc' : 'desc';

        this.props.onSort(page, rowsPerPage, sortKey, newOrder);
    };

    onRowClick(event) {
        console.log("event", event);
    };

    render() {
        const { classes, columns, data, totalItems,
            page, rowsPerPage, orderBy, order, withPaging } = this.props;

        return (
            <div className={classes.tableWrapper}>
                <Table className={classes.table} aria-labelledby="tableTitle">
                    <GridHeader
                        columns={columns}
                        orderBy={orderBy}
                        order={order}
                        onSort={this.onSort}
                    />
                    <GridBody
                        columns={columns}
                        data={data}
                        orderBy={orderBy}
                        order={order}
                        onRowClick={this.onRowClick}
                    />
                </Table>
                {withPaging &&
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={totalItems}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        backIconButtonProps={{ 'aria-label': 'Previous Page' }}
                        nextIconButtonProps={{ 'aria-label': 'Next Page' }}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
                }
            </div>
        )
    }
}

Grid.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    totalItems: PropTypes.number.isRequired,
    onChangePage: PropTypes.func,
    onChangeRowsNumber: PropTypes.func,
    onSort: PropTypes.func,
    page: PropTypes.number,
    rowsPerPage: PropTypes.number,
    orderBy: PropTypes.string,
    order: PropTypes.string,
    withPaging: PropTypes.bool
}

export default withStyles(tableStyles)(Grid)