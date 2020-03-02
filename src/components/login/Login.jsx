import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

import { Button, withStyles, Grid, TextField, List, ListItem } from '@material-ui/core';

import loginStyles from './login-styles';

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

        this.getInputParams = this.getInputParams.bind(this);
    }

    getInputParams() {
        const { t } = this.props;
        return [
            { id: 'login', label: t('LoginPage_Login_Label') },
            { id: 'password', label: t('LoginPage_Password_Label') }
        ];
    }

    render() {

        const { t, classes } = this.props;
        const listElements = this.getInputParams().map((item) => listItemComponent(item));

        return (
            <div>
                <Grid container justify="center">
                    <List className={classes.list}>
                        {listElements}
                        <ListItem>
                            <Button variant="contained" color="secondary">
                                {t('LoginPage_Enter_Label')}
                            </Button>
                        </ListItem>
                    </List>
                </Grid>
            </div>
        );
    }
}

Login.propTypes = {
    t: PropTypes.func,
    classes: PropTypes.object
}

export default compose(withTranslation(), withStyles(loginStyles))(Login);