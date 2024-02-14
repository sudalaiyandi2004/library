
// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Search from './Search';
import Login from './Login';
import Register from './Register';
import Due from './Due';
import Profile from './Profile';
function App() {
  return (
    <div>
      <Navbar/>
      <Search/>
    </div>
  );
}

export default App;
