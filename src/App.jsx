import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import cookie from 'cookie'; // Import the 'cookie' library
import Home from '../containers/Home';
import BizInfo from '../containers/BizInfo';
import Login from './components/Login';
import Add from './components/Add';
import './App.css';

function checkAuth() {
  const cookies = cookie.parse(document.cookie);
  return cookies.isLoggedIn === 'true' ? true : false;
}

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = checkAuth(); // Check authentication using the 'cookie' library

  return isLoggedIn === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authStatus = checkAuth();
    console.log(authStatus);
    setIsLoggedIn(authStatus);
  }, [isLoggedIn, setIsLoggedIn]);
  console.log("app", isLoggedIn)
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listings" element={<Home />} />
      <Route path="/:bizName" element={<BizInfo />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add" element={<ProtectedRoute component={Add} />} />
    </Routes>
    </>
  );
}

export default App;
