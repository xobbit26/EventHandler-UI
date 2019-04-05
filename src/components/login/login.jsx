import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import loginStyles from './login-styles';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container justify="center">
                    <List className={classes.root}>
                        <ListItem>
                            <TextField
                                id="standard-full-width"
                                label="Login"
                                style={{ width: '100%' }}
                                variant="outlined"
                                margin="normal"
                                InputLabelProps={{ shrink: true }}
                            />
                        </ListItem>
                        <ListItem>
                            <TextField
                                id="standard-full-width"
                                label="Password"
                                style={{ width: '100%' }}
                                variant="outlined"
                                margin="normal"
                                InputLabelProps={{ shrink: true }}
                            />
                        </ListItem>
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