import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {AuthProvider} from "./context/AuthProvider";
import App from './App';

import './css/index.css';
import {Provider} from "react-redux";
import {setupStore} from "./redux/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setupStore()

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AuthProvider>
                    <Routes>
                        <Route path="/*" element={<App />}/>
                    </Routes>
                </AuthProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
