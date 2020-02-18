import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
    withStyles, AppBar, Toolbar, Typography,
    Button, IconButton, CssBaseline
} from '@material-ui/core/';

import {
    Menu as MenuIcon
} from '@material-ui/icons/';

import classNames from 'classnames';
import applicationBarStyles from './application-bar-styles';

class ApplicationBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, isOpenMenuBar, isAuthentificated, handleDrawerOpen } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="fixed" className={classNames(classes.appBar, { [classes.appBarShift]: isOpenMenuBar, })}>
                    <Toolbar disableGutters={!isOpenMenuBar}>

                        {isAuthentificated &&
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={handleDrawerOpen}
                                className={classNames(classes.menuButton, isOpenMenuBar && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                        }
                        <Typography className={classes.grow} variant="h6" color="inherit" component={Link} to="/">RC</Typography>
                        <Button color="inherit" href="#/login" className={classes.loginButton}>Login</Button>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}

ApplicationBar.propTypes = {
    isOpenMenuBar: PropTypes.bool.isRequired,
    isAuthentificated: PropTypes.bool.isRequired,
    handleDrawerOpen: PropTypes.func
}

const mapStateToProps = (state) => ({

})

export default withStyles(applicationBarStyles, { withTheme: true })(ApplicationBar);