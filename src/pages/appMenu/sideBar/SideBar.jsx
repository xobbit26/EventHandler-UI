import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import {
    IconButton, Drawer, Divider,
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

import { useTheme } from '@material-ui/core/styles';
import useSideBarStyles from './side-bar-styles';

function SideBar({ closeSideBar }) {
    const isOpenSideBar = useSelector(state => state.appMenu.get('isOpenSideBar'));
    const { t } = useTranslation();
    const classes = useSideBarStyles();
    const theme = useTheme();

    function getMenuListItemsParams() {
        return [
            { key: 'sender', name: t('AppBar_Create_Event_Label'), url: '/sender', icon: <AddIcon /> },
            { key: 'events', name: t('AppBar_Event_List_Label'), url: '/events', icon: <ViewListIcon /> },
            { key: 'reports', name: t('AppBar_Reports_Label'), url: '/reports', icon: <AssessmentIcon /> },
            { key: 'administration', name: t('AppBar_Reports_Administration'), url: '/administration', icon: <AccountCircleIcon /> },
            { key: 'settings', name: t('AppBar_Reports_Settings'), url: '/settings', icon: <SettingIcon /> }
        ];
    };

    function getMenuListItems() {
        return getMenuListItemsParams().map((item) => {
            return (
                <ListItem button key={item.key} component={Link} to={item.url}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                </ListItem>
            );
        });
    };

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
                {getMenuListItems()}
            </List>
        </Drawer>
    );
};

SideBar.propTypes = {
    isOpenSideBar: PropTypes.bool,
    closeSideBar: PropTypes.func,
    t: PropTypes.func,
    classes: PropTypes.object,
    theme: PropTypes.object
};

export default SideBar;