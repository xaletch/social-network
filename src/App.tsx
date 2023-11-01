import React from 'react';
import './style/index.css';

import { Routes, Route } from 'react-router-dom';
import { LogIn } from './page/LogIn';
import { Register } from './page/Register';
import { Home } from './page/Home';
import { Header } from './components/Header';
import { Message } from './page/Message';
import { Profile } from './page/Profile';

function App() {
  return (
    <div className="App">
      <div className=''>
        <Header/>
        <Routes>
          <Route path='login' element={<LogIn/>}></Route>
          <Route path='register' element={<Register/>}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='message' element={<Message />}></Route>
          <Route path='profile/@kirill' element={<Profile />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
