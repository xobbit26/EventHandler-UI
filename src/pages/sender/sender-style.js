import { makeStyles } from '@material-ui/core/styles';

const useSenderStyle = makeStyles(theme => ({
    list: {
        width: '100%',
        height: '100%',
        width: 800,
        borderRadius: 5,
        padding: 15,
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(),
        boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2)'
    },

    inline: {
        display: 'inline',
    },

    success: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default useSenderStyle;