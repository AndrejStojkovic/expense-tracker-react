import { useState, useEffect } from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Config/FirebaseConfig';

const AuthRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if(user) setIsAuthenticated(true);
    else setIsAuthenticated(false);
  });

  useEffect(() => {
    AuthCheck();
  }, [])

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
}

export default AuthRoute;