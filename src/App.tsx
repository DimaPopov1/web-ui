import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Register from './components/Authorization/Register';
import Login from './components/Authorization/Login';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import Home from './components/Home/Home';
import './css/App.css';
import Profile from "./components/Profile/Profile";
import {IState} from "./redux/state";


const ROLES = {
    'User':'User',
    'Dealer':'Dealer',
    'Admin':'Admin'
}
function App(props : IState) {
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
              <Route path="/profile" element={<Profile user={props.state?.user} />} />

          </Route>
      </Routes>
  );
}

export default App;
