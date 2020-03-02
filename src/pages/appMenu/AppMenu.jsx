import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { openSideBar, closeSideBar } from '../../store/appMenu/actions';
import SideBar from './sideBar/SideBar';
import { Menu as MenuIcon } from '@material-ui/icons/';
import {
    AppBar, Toolbar, Typography,
    Button, IconButton, CssBaseline
} from '@material-ui/core/';

import clsx from 'clsx';
import appMenuStyles from './app-menu-styles';

function AppMenu() {
    const { t } = useTranslation();
    const classes = appMenuStyles();
    const dispatch = useDispatch();

    const { isUserAuthenticated, isOpenSideBar } = useSelector(state => ({
        isUserAuthenticated: state.app.get('isUserAuthenticated'),
        isOpenSideBar: state.appMenu.get('isOpenSideBar'),
    }));

    function onOpenSideBar() {
        dispatch(openSideBar());
    }

    function onCloseSideBar() {
        dispatch(closeSideBar());
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: isOpenSideBar, })}>
                <Toolbar disableGutters={!isOpenSideBar}>

                    {isUserAuthenticated &&
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={onOpenSideBar}
                            className={clsx(classes.menuButton, isOpenSideBar && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                    }
                    <Typography className={classes.grow} variant="h6" color="inherit" component={Link} to="/">{t('AppName_Label')}</Typography>
                    <Button color="inherit" href="#/login" className={classes.loginButton}>{t('AppBar_Login_Label')}</Button>
                </Toolbar>
            </AppBar>

            <SideBar isOpenSideBar={isOpenSideBar}
                closeSideBar={onCloseSideBar} />

        </React.Fragment>
    )
}

AppMenu.propTypes = {
    t: PropTypes.func,
    isUserAuthenticated: PropTypes.bool,
    isOpenSideBar: PropTypes.bool,
    openSideBar: PropTypes.func,
    closeSideBar: PropTypes.func
}

export default AppMenu;