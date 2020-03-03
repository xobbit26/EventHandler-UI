import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { Button, Grid, TextField, List, ListItem } from '@material-ui/core';

import useLoginStyles from './login-styles';

function Login() {
    const classes = useLoginStyles();
    const { t } = useTranslation();

    function getInputParams() {
        return [
            { id: 'login', label: t('LoginPage_Login_Label') },
            { id: 'password', label: t('LoginPage_Password_Label') }
        ];
    };

    return (
        <div>
            <Grid container justify="center">
                <List className={classes.list}>
                    {getInputParams().map((item) => {
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
                        )
                    })}
                    <ListItem>
                        <Button variant="contained" color="secondary">
                            {t('LoginPage_Enter_Label')}
                        </Button>
                    </ListItem>
                </List>
            </Grid>
        </div>
    );
};

Login.propTypes = {
    t: PropTypes.func,
    classes: PropTypes.object
};

export default Login;