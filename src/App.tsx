import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Register from './components/Authorization/Register';
import Login from './components/Authorization/Login';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import Home from './components/Home/Home';
import AuthFooter from './components/Footer/Footer';
import './css/App.css';
import Footer from "./components/Footer/Footer";

const ROLES = {
    'User':'User',
    'Dealer':'Dealer',
    'Admin':'Admin'
}
function App() {
  return (
      <Routes>
          <Route path="/" element={<Layout />}>
              {/* public routes */}
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />

              {/* we want to protect these routes */}{/*
              <Route element={<RequireAuth AllowedRole = {ROLES.User} />}>
                  <Route path="/" element={<Home />} />
              </Route>*/}
              <Route path="/" element={<Home />} />
          </Route>
      </Routes>
  );
}

export default App;
