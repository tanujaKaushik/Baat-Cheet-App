import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './pages/Register';
import  Login from './pages/Login';
import  SetAvatar from './pages/SetAvatar';
import Chat from './pages/Chat';
import Home from './pages/Home';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/setAvatar" element={<SetAvatar/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
