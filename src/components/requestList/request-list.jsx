import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import RequestListTable from './requestListTable/request-list-table';

import requestListStyles from './request-list-styles';

let counter = 0;
function createData(fio, date, description, responsible, resolveDate) {
    counter += 1;
    return { id: counter, fio, date, description, responsible, resolveDate };
}

const tableTestData = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
]


class RequestList extends React.Component {

    componentWillMount() {
        //TODO: Create ajax here

        this.setState({ tableData: tableTestData });
    };

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <RequestListTable tableData={this.state.tableData} />
            </Paper>
        )
    }
}

export default withStyles(requestListStyles)(RequestList);