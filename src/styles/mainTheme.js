import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {

        primary: {
            light: '#5393ff',
            main: '#2979ff',
            dark: '#1c54b2',
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
});

export default theme;