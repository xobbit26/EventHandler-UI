import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import i18next from 'i18next';

import { requestEvents } from '../../store/events/actions';
import { REQUEST_EVENTS_URL, api } from '../../api/api';
import { gridConstants } from '../../constants/gridConstants';
import Grid from '../../components/grid/Grid';

import eventListStyles from './events-styles';

function Events() {
    const dispatch = useDispatch();

    const [gridOptions, setGridOptions] = useState({
        page: 0,
        rowsPerPage: gridConstants.defaultItemsPerPage,
        orderBy: 'applyDateTime',
        order: 'asc'
    });

    useEffect(() => {
        const { page, rowsPerPage, orderBy, order } = gridOptions;
        requestEventsGridData(page, rowsPerPage, orderBy, order);
    }, []);

    const { eventsGridData } = useSelector(state => ({
        eventsGridData: state.events.get('eventsGridData').toJS()
    }));

    function requestEventsGridData(page, rowsPerPage, orderBy, order) {

        //TODO: After creating loader it needt to get language parameter from i18next api
        console.log("i18next.language", i18next.language);
        const language = 'en';

        const skip = page * rowsPerPage;
        const url = `${REQUEST_EVENTS_URL}/${language}?skip=${skip}&take=${rowsPerPage}&orderBy=${orderBy}&direction=${order}`;

        api.get(url)
            .then((data) => { dispatch(requestEvents(data)); })
            .then(() => { setGridOptions({ rowsPerPage, page, orderBy, order }); });
    };

    const { page, rowsPerPage, orderBy, order } = gridOptions;
    const { isGridEmpty, data, columns, totalItems } = eventsGridData;
    const classes = eventListStyles();

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
    requestEvents: PropTypes.func
}

export default Events;

// class Events extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             grid: {
//                 page: 0,
//                 rowsPerPage: gridConstants.defaultItemsPerPage,
//                 orderBy: 'applyDateTime',
//                 order: 'asc'
//             }
//         }

//         this.requestEventsGridData = this.requestEventsGridData.bind(this);
//     };

//     componentDidMount() {
//         const { page, rowsPerPage, orderBy, order } = this.state.grid;
//         this.requestEventsGridData(page, rowsPerPage, orderBy, order);
//     }

//     requestEventsGridData(page, itemsPerPage, orderBy, order) {

//         //TODO: After creating loader it needt to get language parameter from i18next api
//         console.log("i18next.language", i18next.language);
//         const language = 'en';

//         const skip = page * itemsPerPage;
//         const url = `${REQUEST_EVENTS_URL}/${language}?skip=${skip}&take=${itemsPerPage}&orderBy=${orderBy}&direction=${order}`;

//         api.get(url)
//             .then((data) => {
//                 this.props.requestEvents(data);
//             })
//             .then(() => {
//                 this.setState({
//                     grid: {
//                         rowsPerPage: itemsPerPage,
//                         page: page,
//                         orderBy: orderBy,
//                         order: order
//                     }
//                 });
//             });
//     }

//     render() {
//         const { page, rowsPerPage, orderBy, order } = this.state.grid;
//         const { classes, eventsGridData } = this.props;
//         const { isGridEmpty, data, columns, totalItems } = eventsGridData;

//         return (
//             <Paper className={classes.root}>
//                 {!isGridEmpty &&
//                     <Grid columns={columns}
//                         data={data}
//                         totalItems={totalItems}
//                         onChangePage={this.requestEventsGridData}
//                         onChangeRowsNumber={this.requestEventsGridData}
//                         onSort={this.requestEventsGridData}
//                         page={page}
//                         rowsPerPage={rowsPerPage}
//                         withPaging={true}
//                         orderBy={orderBy}
//                         order={order} />
//                 }
//             </Paper>
//         )
//     }
// };

// Events.propTypes = {
//     eventsGridData: PropTypes.object,
//     requestEvents: PropTypes.func
// }

// const mapStateToProps = (state) => ({
//     eventsGridData: state.events.get('eventsGridData').toJS()
// });

// const mapDispatchToProps = {
//     requestEvents
// }

// export default compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     withStyles(eventListStyles)
// )(Events);