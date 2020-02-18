import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ApplicationBar from '../appMenu/applicationBar/ApplicationBar';
import SideBar from '../appMenu/sideBar/SideBar';

import { withStyles } from '@material-ui/core/';

import classNames from 'classnames';
import Sender from '../sender/Sender';
import Login from '../login/Login';
import Administration from '../administration/Administration';
import Settings from '../settings/Settings';
import Reports from '../reports/Reports';
import Events from '../events/Events';
import NotFound_404 from '../404NotFound/404notFound';

import layoutStyles from './layout-styles';

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpenMenuBar: false
        };

        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
    }

    handleDrawerOpen() {
        this.setState({ isOpenMenuBar: true });
    };

    handleDrawerClose() {
        this.setState({ isOpenMenuBar: false });
    };

    render() {
        const { classes, isAuthentificated } = this.props;
        const { isOpenMenuBar } = this.state;

        return (
            <div className={classes.root}>

                <ApplicationBar
                    isOpenMenuBar={isOpenMenuBar}
                    isAuthentificated={isAuthentificated}
                    handleDrawerOpen={this.handleDrawerOpen}
                />

                <SideBar
                    isOpenMenuBar={isOpenMenuBar}
                    handleDrawerClose={this.handleDrawerClose} />

                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: isOpenMenuBar,
                    })}
                >
                    <div className={classes.drawerHeader} />
                    <Switch>
                        <Route exact path="/" component={Sender} />
                        <Route path="/login" component={Login} />
                        {isAuthentificated &&
                            <Route path="/administration" component={Administration} />
                        }
                        <Route path="/settings" component={Settings} />
                        <Route path="/reports" component={Reports} />
                        <Route path="/events" component={Events} />
                        <Route path="*" component={NotFound_404} />
                    </Switch>
                </main>
            </div >
        )
    }
}

export default withStyles(layoutStyles, { withTheme: true })(Layout);