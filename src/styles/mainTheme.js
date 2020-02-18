import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {

        primary: {
            light: '#5381ff',
            main: '#2962ff',
            dark: '#1c44b2',
        },
        secondary: {
            light: '#33eb91',
            main: '#00e676',
            dark: '#00a152',
        }
    },

    typography: {
        useNextVariants: true,
    },

    drawerWidth: 240
});

export default theme;