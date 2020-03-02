import React from 'react';
import { useSelector } from "react-redux";

import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppMenu from '../appMenu/AppMenu';
import Sender from '../sender/Sender';
import Login from '../login/Login';
import Administration from '../administration/Administration';
import Settings from '../settings/Settings';
import Reports from '../reports/Reports';
import Events from '../events/Events';
import NotFound_404 from '../404NotFound/404notFound';

import clsx from 'clsx';
import layoutStyles from './layout-styles';

function Layout() {

    const classes = layoutStyles();
    const { isUserAuthenticated, isOpenSideBar } = useSelector(state => ({
        isUserAuthenticated: state.app.get('isUserAuthenticated'),
        isOpenSideBar: state.appMenu.get('isOpenSideBar'),
    }));

    return (
        <div className={classes.root}>
            <AppMenu />

            <main className={clsx(classes.content, { [classes.contentShift]: isOpenSideBar })}>
                <div className={classes.drawerHeader} />
                <Switch>
                    <Route exact path="/" component={Events} />
                    <Route path="/login" component={Login} />
                    {isUserAuthenticated &&
                        <Route path="/administration" component={Administration} />
                    }
                    <Route path="/sender" component={Sender} />
                    <Route path="/events" component={Events} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/reports" component={Reports} />
                    <Route path="*" component={NotFound_404} />
                </Switch>
            </main>
        </div >
    );
}

Layout.propTypes = {
    isUserAuthenticated: PropTypes.bool,
    isOpenSideBar: PropTypes.bool
};

export default Layout;