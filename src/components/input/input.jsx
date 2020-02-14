import React, { Component } from 'react';
import { withStyles, TextField, ListItem } from '@material-ui/core';
import inputStyles from './input-styles';

class Input extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        const { id, label, value, multiline, rows } = this.props;
        return (
            <ListItem key={id}>
                <TextField key={id}
                    id={id}
                    label={label}
                    style={{ width: '100%' }}
                    variant="outlined"
                    margin="normal"
                    value={value}
                    InputLabelProps={{ shrink: true }}
                    multiline={multiline}
                    rows={rows}
                    onChange={(event) => this.props.handleChange(event)}
                />
            </ListItem>
        )
    };
};

export default withStyles(inputStyles)(Input);