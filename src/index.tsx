import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {AuthProvider} from "./context/AuthProvider";
import App from './App';
import state from './redux/state';
import './css/index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/*" element={<App state={state}/>}/>
                    </Routes>
                </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
