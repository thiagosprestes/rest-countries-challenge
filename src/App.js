import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import Header from './components/Header';

import GlobalStyle from './styles/global';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import usePersistedState from './utils/usePersistedState';

export default function App() {
    const [theme, setTheme] = usePersistedState('theme', light);

    function toggleTheme() {
        setTheme(theme.name === 'light' ? dark : light);
    }

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header toggleTheme={toggleTheme} />
                <Routes />
                <GlobalStyle />
            </BrowserRouter>
        </ThemeProvider>
    );
}
