import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/gobal';
import Header from './components/Header/index';
import Routes from './routes';

import './config/ReactotronConfig';

import store from './store/index';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes />
                <GlobalStyle />
                <ToastContainer autoClose={3000} />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
