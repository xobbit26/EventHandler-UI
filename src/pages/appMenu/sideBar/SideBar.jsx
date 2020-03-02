import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

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
    ChevronRight as ChevronRightIcon,
    Add as AddIcon
} from '@material-ui/icons/';

import sideBarStyles from './side-bar-styles';

class SideBar extends Component {
    constructor(props) {
        super(props);

        this.getMenuListItemsParams = this.getMenuListItemsParams.bind(this);
    }

    getMenuListItemsParams() {
        const { t } = this.props;
        return [
            { key: 'sender', name: t('AppBar_Create_Event_Label'), url: '/sender', icon: <AddIcon /> },
            { key: 'events', name: t('AppBar_Event_List_Label'), url: '/events', icon: <ViewListIcon /> },
            { key: 'reports', name: t('AppBar_Reports_Label'), url: '/reports', icon: <AssessmentIcon /> },
            { key: 'administration', name: t('AppBar_Reports_Administration'), url: '/administration', icon: <AccountCircleIcon /> },
            { key: 'settings', name: t('AppBar_Reports_Settings'), url: '/settings', icon: <SettingIcon /> }
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
    t: PropTypes.func,
    isOpenSideBar: PropTypes.bool,
    closeSideBar: PropTypes.func
}

export default compose(
    withTranslation(),
    withStyles(sideBarStyles, { withTheme: true })
)(SideBar);