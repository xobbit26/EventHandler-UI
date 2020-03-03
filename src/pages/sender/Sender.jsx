import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';
import { PropTypes } from 'prop-types';

import Input from '../../components/input/input.jsx';
import { Button, Grid, List, ListItem } from '@material-ui/core';
import { sendEvent } from '../../store/sender/actions';
import { CREATE_EVENT_URL, api } from '../../api/api';

import useSenderStyle from './sender-style';

function Sender() {
    const [inputs, setInputs] = useState({ applicant: '', applicantDepartment: '', description: '' });
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const classes = useSenderStyle();

    function getInputParams() {
        return [
            { id: 'applicant', label: t('CreateEvent_FullName_Label'), multiline: false },
            { id: 'applicantDepartment', label: t('CreateEvent_Department_Label'), multiline: false },
            { id: 'description', label: t('CreateEvent_Description_Label'), multiline: true, rows: 10 }
        ]
    };

    function handleChange(event) {
        const { id, value } = event.target;
        setInputs({ ...inputs, [id]: value });
    };

    function onSend() {
        api.post(CREATE_EVENT_URL, inputs)
            .then(() => {
                dispatch(sendEvent());
                clearState();
            })
    };

    function clearState() {
        setInputs({ applicant: '', applicantDepartment: '', description: '' });
    };

    return (
        <Grid container justify="center">
            <List className={classes.list}>

                {getInputParams().map((item) => {
                    return (<Input key={item.id}
                        id={item.id}
                        handleChange={handleChange}
                        label={item.label}
                        value={inputs[item.id]}
                        multiline={item.multiline}
                        rows={item.rows} />)
                })}

                <ListItem alignItems="center">
                    <Button variant="contained"
                        color="secondary"
                        onClick={onSend}>
                        {t('CreateEvent_Submit_Button_Label')}
                    </Button>
                </ListItem>
            </List>
        </Grid>
    );
};

Sender.propTypes={
    dispatch: PropTypes.func,
    t: PropTypes.func,
    classes: PropTypes.object
}

export default Sender;
