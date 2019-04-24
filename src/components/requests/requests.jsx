import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import RequestsTable from './requestsTable/requests-table';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import requestsStyles from './requests-styles';

class Requests extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <RequestsTable tableData={this.props.tableData} />
            </Paper>
        )
    }
}

function mapStateToProps(state) {
    return {
        tableData: state.requests
    }
};

export default connect(mapStateToProps)(withStyles(requestsStyles)(Requests));