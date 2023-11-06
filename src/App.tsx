import React, { useEffect, useState } from 'react';
import './style/index.css';

import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { LogIn } from './page/LogIn';
import { Register } from './page/Register';
import { Home } from './page/Home';
import { Header } from './components/Header/Header';
import { Message } from './page/Message';
import { Profile } from './page/Profile';
import axios from './axios';
import { LogOut } from './components/Menu/LogOut';

type Data = {
  avatarUrl: string,
  email: string,
  name: string,
  surname: string,
  username: string,
}

function App() {
  const [userData, setUserData] = useState<Data | undefined>();
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const [menuLogOut, setMenuLogOut] = useState<boolean>(false);

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      navigate('/home');
    };
  }, [token]);

  useEffect(() => {
    const authMe = async () => {
      try {
        const data = await axios.get('/account');

        setUserData(data.data);
      }
      catch (err) {
        console.log('ME ERROR: ', err);
      }
    };
    authMe();
  }, [isAuth]);
  
  return (
    <div className="App">
      <div className=''>
      {localStorage.getItem('token') && (<Header avatarUrl={userData?.avatarUrl} name={userData?.name} surname={userData?.surname} username={userData?.username} setMenuLogOut={setMenuLogOut} />)}
        <Routes>
          <Route path='login' element={<LogIn isAuth={isAuth} setIsAuth={setIsAuth}/>}></Route>
          <Route path='register' element={<Register isAuth={isAuth} setIsAuth={setIsAuth} />}></Route>
          {token ? (
            <>
            <Route path="home" element={<Home />} />
            <Route path="message" element={<Message />} />
            <Route path={`profile/${userData?.username}`} element={<Profile userData={userData} />} />
          </>
        ) : (
          <Route path='login' element={<LogIn isAuth={isAuth} setIsAuth={setIsAuth}/>}></Route>
        )}
        </Routes>
        {menuLogOut && <LogOut setMenuLogOut={setMenuLogOut} setIsAuth={setIsAuth} />}
      </div>
    </div>
  );
}

export default App;
