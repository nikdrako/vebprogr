import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Register from './Register';
import Login from './Login';
import RoutesPage from './RoutesPage';
import Navbar from './Navbar';
import './styles.css';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <Navbar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/routes" element={<RoutesPage />} />
      </Routes>
    </>
  );
};

export default App;
