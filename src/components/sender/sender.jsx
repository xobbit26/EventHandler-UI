import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Button, withStyles, Grid, TextField, List, ListItem } from '@material-ui/core';
import senderStyles from './sender-style';
import { sendRequest } from '../../actions/sender.actions';
import { getFioState, getDepartmentState, getDescriptionState } from '../../reducers/sender.reducer';

const inputParams = [
    { id: 'fio', label: 'ФИО отправителя', multiline: false },
    { id: 'department', label: 'Отдел', multiline: false },
    { id: 'description', label: 'Описание', multiline: true, rows: 10 }
];

class Inputs extends Component {
    constructor(props) {
        super(props);
    };

    render() {

        return (
            <div>
                {inputParams.map((item) => {
                    return (
                        <ListItem key={item.id}>
                            <TextField
                                id={item.id}
                                label={item.label}
                                style={{ width: '100%' }}
                                variant="outlined"
                                margin="normal"
                                InputLabelProps={{ shrink: true }}
                                multiline={item.multiline}
                                rows={item.rows}
                                onChange={(event) => this.props.handleChange(event)}
                            />
                        </ListItem>
                    );
                })}
            </div>
        )
    };
};

class Sender extends Component {

    constructor(props) {
        super(props);
    };

    handleChange = (event) => {
        const { id, value } = event.target;
        this.setState({ [id]: value });
    };


    //find out how to do it better (through state or props)
    onSend = () => {
        this.props.sendRequest(this.state);
    };


    render() {
        const { classes } = this.props;
        return (
            <Grid container justify="center">
                <List className={classes.list}>
                    <Inputs handleChange={this.handleChange} />
                    <ListItem alignItems="center">
                        <Button variant="contained" color="secondary" onClick={this.onSend}>
                            Отправить
                        </Button>
                    </ListItem>
                </List>
            </Grid>
        );
    };
};

Sender.propTypes = {
    fio: PropTypes.string,
    department: PropTypes.string,
    description: PropTypes.string
}

function mapStateToProps(state) {
    return {
        fio: getFioState(state),
        department: getDepartmentState(state),
        description: getDescriptionState(state)
    };
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ sendRequest: sendRequest }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(withStyles(senderStyles)(Sender));