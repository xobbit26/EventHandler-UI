import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { requestEvents } from '../../store/events/actions';
import PropTypes from 'prop-types';
import Grid from '../../sharedComponents/grid/Grid';
import { REQUEST_EVENTS_URL, api } from '../../api/api';
import { gridConstants } from '../../constants/gridConstants';

import eventListStyles from './events-styles';

class Events extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            grid: {
                page: 0,
                rowsPerPage: gridConstants.defaultItemsPerPage
            }
        }

        this.requestEventsGridData = this.requestEventsGridData.bind(this);
    };

    componentDidMount() {
        const { page, rowsPerPage } = this.state.grid;
        this.requestEventsGridData(page, rowsPerPage);
    }

    requestEventsGridData(page, itemsPerPage) {
        const { grid } = this.state;
        const skip = page * itemsPerPage;
        const url = `${REQUEST_EVENTS_URL}?skip=${skip}&take=${itemsPerPage}`;
        api.get(url)
            .then((data) => {
                this.props.requestEvents(data);
            })
            .then(() => {
                if (grid.rowsPerPage !== itemsPerPage || grid.page !== page) {
                    this.setState({ grid: { rowsPerPage: itemsPerPage, page: page } });
                }
            });
    }

    render() {
        const { page, rowsPerPage } = this.state.grid;
        const { classes, eventsGridData } = this.props;
        const { isGridEmpty, data, columns, totalItems } = eventsGridData;

        return (
            <Paper className={classes.root}>
                {!isGridEmpty &&
                    <Grid columns={columns}
                        data={data}
                        totalItems={totalItems}
                        onChangePage={this.requestEventsGridData}
                        onChangeRowsNumber={this.requestEventsGridData}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        withPaging={true}
                        sortBy='applicant'
                        order='asc' />
                }
            </Paper>
        )
    }
};

Events.propTypes = {
    eventsGridData: PropTypes.object,
    requestEvents: PropTypes.func
}

const mapStateToProps = (state) => ({
    eventsGridData: state.events.get('eventsGridData').toJS()
});

const mapDispatchToProps = {
    requestEvents
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(eventListStyles)(Events));