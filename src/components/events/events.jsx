import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import EventsTable from './eventsTable/events-table';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents } from '../../actions/events.actions';
import PropTypes from 'prop-types';
import { getEventsState } from '../../reducers/events.reducer';

import eventListStyles from './events-styles';

class Events extends React.Component {

    constructor(props) {
        super(props);
        this.getTableData();
    };

    getTableData = () => {
        const events = getEvents({});
    };

    render() {
        const { classes, tableData } = this.props;
        return (
            <Paper className={classes.root}>
                <EventsTable tableData={tableData} />
            </Paper>
        )
    }
};

function mapStateToProps(state) {
    return {
        tableData: getEventsState(state)
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ getEvents: getEvents }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(withStyles(eventListStyles)(Events));