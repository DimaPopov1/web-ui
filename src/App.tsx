import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import Home from './components/Home';

function App() {
  return (
      <Routes>
          <Route path="/" element={<Layout />}>
              {/* public routes */}
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />

              {/* we want to protect these routes */}
              <Route element={<RequireAuth />}>
                  <Route path="/" element={<Home />} />
              </Route>

        {/*      <Route element={<RequireAuth allowedRoles={[ROLES.Editor]}/>}>
                  <Route path="editor" element={<Editor/>}/>
              </Route>


              <Route element={<RequireAuth allowedRoles={[ROLES.Admin]}/>}>
                  <Route path="admin" element={<Admin/>}/>
              </Route>

              <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]}/>}>
                  <Route path="lounge" element={<Lounge/>}/>
              </Route>

               catch all
              <Route path="*" element={<Missing/>}/>*/}
          </Route>
      </Routes>
  );
}

export default App;
