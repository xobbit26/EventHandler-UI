import React, { Component } from 'react';
import { Button, withStyles, Grid, TextField, List, ListItem } from '@material-ui/core';

import senderStyles from './sender-style';

const inputParams = [
    { id: 'fio', label: 'ФИО отправителя', multiline: false },
    { id: 'department', label: 'ФИО отправителя', multiline: false },
    { id: 'description', label: 'ФИО отправителя', multiline: true, rows: 10 }
];

const listItemComponent = (item) => {
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
            />
        </ListItem>
    );
};

class Sender extends Component {

    constructor(props) {
        super(props);
    };

    sendNewRequest = () => {
        //Post api
        console.log(this.state);
    };

    render() {
        const { classes } = this.props;
        const listItemComponents = inputParams.map((item) => listItemComponent(item));
        return (
            <Grid container justify="center">
                <List className={classes.list}>
                    {listItemComponents}
                    <ListItem alignItems="center">
                        <Button variant="contained" color="secondary" onClick={this.sendNewRequest}>
                            Отправить
                        </Button>
                    </ListItem>
                </List>
            </Grid>
        );
    };
};

export default withStyles(senderStyles)(Sender);