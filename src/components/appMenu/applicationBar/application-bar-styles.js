const applicationBarStyles = theme => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    
    appBarShift: {
        width: `calc(100% - ${theme.drawerWidth}px)`,
        marginLeft: theme.drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },

    hide: {
        display: 'none',
    },

    grow: {
        marginLeft: 25,
        flexGrow: 1,
        textDecoration: 'none'
    },

    loginButton: {
        marginRight: 20
    },
});

export default applicationBarStyles;