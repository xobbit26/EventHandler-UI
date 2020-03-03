import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

import { requestEvents } from '../../store/events/actions';
import { getEventsGridData } from '../../api/events.api';
import { gridConstants } from '../../constants/gridConstants';
import Grid from '../../components/grid/Grid';

import useEventListStyles from './events-styles';

function Events() {
    const [gridOptions, setGridOptions] = useState({
        page: 0,
        rowsPerPage: gridConstants.defaultItemsPerPage,
        orderBy: 'applyDateTime',
        order: 'asc'
    });

    const dispatch = useDispatch();
    const classes = useEventListStyles();
    const eventsGridData = useSelector(state => state.events.get('eventsGridData').toJS());

    useEffect(() => {
        const { page, rowsPerPage, orderBy, order } = gridOptions;
        requestEventsGridData(page, rowsPerPage, orderBy, order);
    }, []);

    function requestEventsGridData(page, rowsPerPage, orderBy, order) {
        getEventsGridData(page, rowsPerPage, orderBy, order)
            .then((data) => { dispatch(requestEvents(data)); })
            .then(() => { setGridOptions({ rowsPerPage, page, orderBy, order }); });
    };

    const { page, rowsPerPage, orderBy, order } = gridOptions;
    const { isGridEmpty, data, columns, totalItems } = eventsGridData;

    return (
        <Paper className={classes.root}>
            {!isGridEmpty &&
                <Grid columns={columns}
                    data={data}
                    totalItems={totalItems}
                    onChangePage={requestEventsGridData}
                    onChangeRowsNumber={requestEventsGridData}
                    onSort={requestEventsGridData}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    withPaging={true}
                    orderBy={orderBy}
                    order={order} />
            }
        </Paper>
    )
}

Events.propTypes = {
    eventsGridData: PropTypes.object,
    requestEvents: PropTypes.func,
    dispatch: PropTypes.func,
    classes: PropTypes.object
}

export default Events;