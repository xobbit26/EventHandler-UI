import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import { openSideBar, closeSideBar } from '../../store/appMenu/actions';
import SideBar from './sideBar/SideBar';
import { Menu as MenuIcon } from '@material-ui/icons/';
import {
    withStyles, AppBar, Toolbar, Typography,
    Button, IconButton, CssBaseline
} from '@material-ui/core/';

import clsx from 'clsx';
import appMenuStyles from './app-menu-styles';

class AppMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { t, classes, isUserAuthenticated, isOpenSideBar, openSideBar, closeSideBar } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />

                <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: isOpenSideBar, })}>
                    <Toolbar disableGutters={!isOpenSideBar}>

                        {isUserAuthenticated &&
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={openSideBar}
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
                    closeSideBar={closeSideBar} />

            </React.Fragment>
        );
    }
}

AppMenu.propTypes = {
    t: PropTypes.func,
    isUserAuthenticated: PropTypes.bool,
    isOpenSideBar: PropTypes.bool,
    openSideBar: PropTypes.func,
    closeSideBar: PropTypes.func
}

const mapStateToProps = (state) => ({
    isUserAuthenticated: state.app.get('isUserAuthenticated'),
    isOpenSideBar: state.appMenu.get('isOpenSideBar')
})

const mapDispatchToProps = {
    openSideBar,
    closeSideBar
}

export default compose(
    withTranslation(),
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(appMenuStyles, { withTheme: true })
)(AppMenu);