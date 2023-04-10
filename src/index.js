import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import './index.css';

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Montserrat',
    headerBgColor: '#800020',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#800020',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);
