import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { requestEvents } from '../../store/events/actions';
import PropTypes from 'prop-types';
import Grid from '../../sharedComponents/grid/Grid';
import { REQUEST_EVENTS_URL, api } from '../../api/api';

import eventListStyles from './events-styles';

class Events extends React.Component {

    constructor(props) {
        super(props);
    };

    getTableColumns() {
        return [
            { id: 'applicant', numeric: false, disablePadding: false, label: 'ФИО подавшего заявку' },
            { id: 'applyDateTime', numeric: false, disablePadding: false, label: 'Дата и время подачи' },
            { id: 'descripton', numeric: false, disablePadding: false, label: 'Описание' },
            { id: 'responsible', numeric: false, disablePadding: false, label: 'Ответственный' },
            { id: 'eventStatusName', numeric: false, disablePadding: false, label: 'Статус' },
            { id: 'resolveDateTime', numeric: false, disablePadding: false, label: 'Дата и время выполнения' },
        ]
    };

    componentDidMount() {
        api.get(REQUEST_EVENTS_URL)
            .then((data) => {
                this.props.requestEvents(data);
            });
    }

    render() {
        const { classes, events } = this.props;
        const tableColumns = this.getTableColumns();

        return (
            <Paper className={classes.root}>
                {events.length != 0 &&
                    <Grid columns={tableColumns}
                        data={events}
                        sortBy='applicant'
                        order='asc' />
                }
            </Paper>
        )
    }
};

Events.propTypes = {
    events: PropTypes.array,
    requestEvents: PropTypes.func
}

const mapStateToProps = (state) => ({
    events: state.events.get('events').toJS()
});

const mapDispatchToProps = {
    requestEvents
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(eventListStyles)(Events));