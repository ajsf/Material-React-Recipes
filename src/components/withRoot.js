
import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import Reboot from 'material-ui/Reboot';
import green from 'material-ui/colors/green';


const theme = createMuiTheme({
    palette: {
        primary: {
            light: purple[300],
            main: purple[500],
            dark: purple[700],
        },
        secondary: {
            light: green[300],
            main: green[500],
            dark: green[700],
        },
    },
});

function withRoot(Component) {
    function WithRoot(props) {
        return (
            <MuiThemeProvider theme={theme}>
                <Reboot />
                <Component {...props} />
            </MuiThemeProvider>
        );
    }
    return WithRoot
}

export default withRoot;