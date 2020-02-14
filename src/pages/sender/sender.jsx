import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Input from '../../components/input/input.jsx';
import { Button, withStyles, Grid, List, ListItem } from '@material-ui/core';
import { sendEvent } from '../../actions/sender.actions';
import senderStyles from './sender-style';

class Sender extends Component {

    constructor(props) {
        super(props);

        this.state = {
            applicant: '',
            applicantDepartment: '',
            description: ''
        }

        this.getInputParams = this.getInputParams.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onSend = this.onSend.bind(this);
        this.clearState = this.clearState.bind(this);
    };

    getInputParams() {
        return [
            { id: 'applicant', label: 'ФИО отправителя', multiline: false },
            { id: 'applicantDepartment', label: 'Отдел', multiline: false },
            { id: 'description', label: 'Описание', multiline: true, rows: 10 }
        ]
    }

    handleChange(event) {
        const { id, value } = event.target;
        this.setState({ [id]: value });
    };

    onSend() {
        this.props.sendEvent(this.state);
        this.clearState();
    };

    clearState() {
        this.setState({
            applicant: '',
            applicantDepartment: '',
            description: ''
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container justify="center">
                <List className={classes.list}>

                    {this.getInputParams().map((item) => {
                        return (<Input key={item.id}
                            id={item.id}
                            handleChange={this.handleChange}
                            label={item.label}
                            value={this.state[item.id]}
                            multiline={item.multiline}
                            rows={item.rows} />)
                    })}

                    <ListItem alignItems="center">
                        <Button variant="contained"
                            color="secondary"
                            onClick={this.onSend}>
                            Отправить
                        </Button>
                    </ListItem>
                </List>
            </Grid>
        );
    };
};

Sender.propTypes = {
    dispatch: PropTypes.func
};

const mapStateToProps = (state) => ({
});

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ sendEvent: sendEvent }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(withStyles(senderStyles)(Sender));