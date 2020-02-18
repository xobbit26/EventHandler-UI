import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
    withStyles, IconButton, Drawer, Divider,
    List, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core/';

import {
    Settings as SettingIcon,
    AccountCircle as AccountCircleIcon,
    Assessment as AssessmentIcon,
    ViewList as ViewListIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon
} from '@material-ui/icons/';

import sideBarStyles from './side-bar-styles';

class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    getMenuListItemsParams() {
        return [
            { key: 'events', name: 'Список заявок', url: '/events', icon: <ViewListIcon /> },
            { key: 'reports', name: 'Отчеты', url: '/reports', icon: <AssessmentIcon /> },
            { key: 'administration', name: 'Админка', url: '/administration', icon: <AccountCircleIcon /> },
            { key: 'settings', name: 'Настройки', url: '/settings', icon: <SettingIcon /> }
        ];
    }

    getMenuListItems() {
        const menuElementList = this.getMenuListItemsParams().map((item) => {
            return (
                <ListItem button key={item.key} component={Link} to={item.url}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                </ListItem>
            );
        })
        return menuElementList;
    };

    render() {
        const { classes, theme, isOpenSideBar, closeSideBar } = this.props;

        return (
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={isOpenSideBar}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={closeSideBar}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {this.getMenuListItems()}
                </List>
            </Drawer>
        );
    }
}

SideBar.propTypes = {
    isOpenSideBar: PropTypes.bool,
    closeSideBar: PropTypes.func
}

export default withStyles(sideBarStyles, { withTheme: true })(SideBar);