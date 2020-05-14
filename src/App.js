import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import Header from './components/Header';

import GlobalStyle from './styles/global';

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes />
            <GlobalStyle />
        </BrowserRouter>
    );
}
