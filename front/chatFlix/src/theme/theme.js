import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';


export const chatFlixTheme = createTheme({
    palette:{
        primary: {
            main: '#2d3047'
        },
        secondary: {
            main: '#a9b3ce'
        },
        tertiary:{
            main: '#8896ab'
        },
        error: {
            main: red.A400
        }
    }
});