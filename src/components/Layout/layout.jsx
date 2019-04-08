import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingIcon from '@material-ui/icons/Settings';
import AccountCircle from '@material-ui/icons/accountCircle';
import Assessment from '@material-ui/icons/Assessment';
import ViewList from '@material-ui/icons/ViewList';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import Sender from '../sender/sender';
import Login from '../login/login';
import Administration from '../administration/administration';
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

                        {!isAuthentificated &&
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, open && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                        }

                        <Typography className={classes.grow} variant="h6" color="inherit">
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
                        <ListItem button key='request-list'>
                            <ListItemIcon><ViewList /></ListItemIcon>
                            <ListItemText primary='Список заявок' />
                        </ListItem>
                        <ListItem button key='reports'>
                            <ListItemIcon><Assessment /></ListItemIcon>
                            <ListItemText primary='Отчеты' />
                        </ListItem>
                        <ListItem button key='administration'>
                            <ListItemIcon><AccountCircle /></ListItemIcon>
                            <ListItemText primary='Админка' />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button key="settings">
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
                        <Route path="*" component={NotFound_404} />
                    </Switch>
                </main>
            </div >
        )
    }
}

export default withStyles(layoutStyles, { withTheme: true })(Layout);