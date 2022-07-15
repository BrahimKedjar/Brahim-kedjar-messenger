import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import AuthProvider from './context/auth';
import Home from './pages/Home';
import PrivateRoutes from './components/Private';
import Profile from './pages/Profile';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/register' exact element={<Register />} />
          <Route path='/login' exact element={<Login />} />
          <Route exact path='/profile' element={<Profile></Profile>} ></Route>
          <Route exact path='/' element={<PrivateRoutes></PrivateRoutes>} >
            <Route element={<Home />} path="/" exact />
            </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
