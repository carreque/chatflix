import {ThemeProvider} from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { chatFlixTheme } from './theme';

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={chatFlixTheme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}
