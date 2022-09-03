import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainApplication from './components/MainApplication';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  return (
    <div className='App'>
      {isUserAuthenticated ? (
        <MainApplication />
      ) : (
        <SignUp />
      )}
    </div>
  );
}

export default App;
