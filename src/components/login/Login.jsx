import React, { Component } from 'react';
import { Button, withStyles, Grid, TextField, List, ListItem } from '@material-ui/core';

import loginStyles from './login-styles';

const inputParams = [
    { id: 'login', label: 'Login' },
    { id: 'password', label: 'Password' }
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
            />
        </ListItem>
    );
};

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { classes } = this.props;
        const listElements = inputParams.map((item) => listItemComponent(item));

        return (
            <div>
                <Grid container justify="center">
                    <List className={classes.list}>
                        {listElements}
                        <ListItem>
                            <Button variant="contained" color="secondary">
                                Войти
                            </Button>
                        </ListItem>
                    </List>
                </Grid>
            </div>
        );
    }
}

export default withStyles(loginStyles)(Login);