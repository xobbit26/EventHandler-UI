import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
//import { requestEvents } from '../../actions/events.actions';
import PropTypes from 'prop-types';
import { getEventsState } from '../../store/events/reducers';
import Grid from '../../sharedComponents/grid/Grid';

import eventListStyles from './events-styles';

class Events extends React.Component {

    constructor(props) {
        super(props);
    };

    componentDidMount() {
        //requestEvents(this.props.dispatch);
    }

    render() {
        const { classes, events } = this.props;
        console.log("events ", events);
        return (
            <Paper className={classes.root}>
                {events.length != 0 &&
                    <Grid tableData={events} />
                }
            </Paper>
        )
    }
};

const mapStateToProps = (state) => ({
    events: getEventsState(state)
});

Events.propTypes = {
    dispatch: PropTypes.func
}

export default connect(mapStateToProps)(withStyles(eventListStyles)(Events));