import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import {
    withStyles, AppBar, Toolbar, Typography,
    Button, IconButton, CssBaseline, Drawer,
    Divider, List, ListItem, ListItemIcon, ListItemText,

} from '@material-ui/core/';

import {
    Menu as MenuIcon, Settings as SettingIcon,
    AccountCircle as AccountCircleIcon, Assessment as AssessmentIcon,
    ViewList as ViewListIcon, ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon
} from '@material-ui/icons/';

import classNames from 'classnames';
import Sender from '../sender/sender';
import Login from '../login/login';
import Administration from '../administration/administration';
import Settings from '../settings/settings';
import Reports from '../Reports/reports';
import RequestList from '../requestList/request-list';
import NotFound_404 from '../404NotFound/404notFound';

import layoutStyles from './layout-styles';

class Layout extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    state = {
        open: false
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, theme, isAuthentificated } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classNames(classes.appBar, { [classes.appBarShift]: open, })}>
                    <Toolbar disableGutters={!open}>

                        {isAuthentificated &&
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, open && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                        }

                        <Typography className={classes.grow} variant="h6" color="inherit" component={Link} to="/">
                            RC
                        </Typography>

                        <Button color="inherit" href="#/login" className={classes.loginButton}>Login</Button>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button key='request-list' component={Link} to="/request-list">
                            <ListItemIcon><ViewListIcon /></ListItemIcon>
                            <ListItemText primary='Список заявок' />
                        </ListItem>
                        <ListItem button key='reports' component={Link} to="/reports">
                            <ListItemIcon><AssessmentIcon /></ListItemIcon>
                            <ListItemText primary='Отчеты' />
                        </ListItem>
                        <ListItem button key='administration' component={Link} to="/administration">
                            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                            <ListItemText primary='Админка' />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button key="settings" component={Link} to="/settings">
                            <ListItemIcon><SettingIcon /></ListItemIcon>
                            <ListItemText primary="Настройки" />
                        </ListItem>
                    </List>
                </Drawer>

                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
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
                        <Route path="/request-list" component={RequestList} />
                        <Route path="*" component={NotFound_404} />
                    </Switch>
                </main>
            </div >
        )
    }
}

export default withStyles(layoutStyles, { withTheme: true })(Layout);