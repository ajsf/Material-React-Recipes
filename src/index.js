import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles/index.css';

const MOUNT_ELEMENT = document.getElementById("root");

const MuiApp = () => (
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
)
ReactDOM.render(<MuiApp />, MOUNT_ELEMENT);


