import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PropTypes } from 'prop-types';
import { notify } from '../../utils/notify-utils';

import Input from '../../components/input/input.jsx';
import { Button, Grid, List, ListItem } from '@material-ui/core';
import { postEvent } from '../../api/sender.api';

import useSenderStyle from './sender-style';

function Sender() {
    const [inputs, setInputs] = useState({ applicant: '', applicantDepartment: '', description: '' });
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
        postEvent(inputs)
            .then(() => {
                notify(t('SuccessMessage_EventCreated'), 'success');
                clearState();
            });
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

Sender.propTypes = {
    t: PropTypes.func,
    classes: PropTypes.object
}

export default Sender;
