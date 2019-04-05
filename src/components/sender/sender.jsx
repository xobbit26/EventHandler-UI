import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import styles from './sender-style';

class Sender extends Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container spacing={8} justify="center" style={{ minHeight: '8vh' }}>
                    <List className={classes.root}>
                        <ListItem>
                            <TextField
                                id="standard-full-width"
                                label="ФИО отправителя"
                                style={{ width: '100%' }}
                                variant="outlined"
                                margin="normal"
                                InputLabelProps={{ shrink: true }}
                            />
                        </ListItem>

                        <ListItem>
                            <TextField
                                id="standard-full-width"
                                label="Отдел"
                                style={{ width: '100%' }}
                                variant="outlined"
                                margin="normal"
                                InputLabelProps={{ shrink: true }}
                            />
                        </ListItem>

                        <ListItem>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Описание"
                                multiline
                                rows="10"
                                rowsMax="15"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                style={{ width: '100%' }}
                            />
                        </ListItem>

                        <ListItem alignItems="center">
                            <Button variant="contained" color="secondary">
                                Отправить
                            </Button>
                        </ListItem>
                    </List>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Sender);