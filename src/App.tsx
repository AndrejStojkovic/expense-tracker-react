import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import MainApplication from './components/MainApplication';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProtectedRoute from './components/Utils/ProtectedRoute';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<ProtectedRoute />}>
          <Route path='/*' element={<MainApplication />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
