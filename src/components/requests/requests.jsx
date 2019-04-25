import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import RequestsTable from './requestsTable/requests-table';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRequests } from '../../actions/requests.actions';
import PropTypes from 'prop-types';
import { getRequestsState } from '../../reducers/requests.reducer';

import requestsStyles from './requests-styles';

class Requests extends React.Component {

    constructor(props) {
        super(props);
        //this.getTableData();
    };

    // getTableData = () => {
    //     let requests = getRequests({});
    // };

    render() {
        const { classes, tableData } = this.props;
        return (
            <Paper className={classes.root}>
                <RequestsTable tableData={tableData} />
            </Paper>
        )
    }
};

// Requests.propTypes = {
//     tableData: PropTypes.array
// };

function mapStateToProps(state) {
    return {
        tableData: getRequestsState(state)
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ getRequests: getRequests }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(withStyles(requestsStyles)(Requests));