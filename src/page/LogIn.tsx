import React, { useState } from 'react'
import { Link } from 'react-router-dom'

type UserLogin = {
  email: string,
  password: string,
}

export const LogIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <div className='container'>
      <div className='flex justify-between items-center h-screen'>
        <div className='w-[440px] h-[440px] bg-slate-700'></div>
        <div className='w-[440px] h-[440px] flex items-center'>
          <div className='w-[70%]'>
            <h2 className='text-3xl font-medium text-color-title'>Вход</h2>
            <div className='form flex flex-col gap-3 mt-3'>
              <input className='p-2 px-3 outline-none rounded text-color-text' type='email' onChange={onChangeEmail} placeholder='Введите email'/>
              <input className='p-2 px-3 outline-none rounded text-color-text' type="password" onChange={onChangePassword} placeholder='Введите пароль'/>
              <div className='flex gap-4 mt-4'>
                <Link to={''}>
                  <button className='p-2 px-5 rounded bg-button text-white'>Войти</button>
                </Link>
                <button className='p-2 px-3 text-sm underline decoration-color-title text-button'><Link to={'/register'}>Зарегистрироваться</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
