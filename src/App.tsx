import React, { useEffect, useState } from 'react';
import './style/index.css';

import { Routes, Route, Navigate } from 'react-router-dom';
import { LogIn } from './page/LogIn';
import { Register } from './page/Register';
import { Home } from './page/Home';
import { Header } from './components/Header';
import { Message } from './page/Message';
import { Profile } from './page/Profile';
import axios from './axios';

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
      {!localStorage.getItem('token') && <Navigate to={'/login'}/>}
        <Header avatarUrl={userData?.avatarUrl} name={userData?.name} surname={userData?.surname} username={userData?.username} />
        <Routes>
          <Route path='login' element={<LogIn isAuth={isAuth} setIsAuth={setIsAuth}/>}></Route>
          <Route path='register' element={<Register isAuth={isAuth} setIsAuth={setIsAuth} />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='message' element={<Message />}></Route>
          <Route path={`profile/${userData?.username}`} element={<Profile userData={userData} />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
