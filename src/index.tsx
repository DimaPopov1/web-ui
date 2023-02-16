import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './css/index.css';
import App from './App';
import {AuthProvider} from "./context/AuthProvider";
import state from './redux/state';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/*" element={<App state={state}/>} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
