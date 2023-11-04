import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, Link } from 'react-router-dom';
import axios from '../axios';

interface LoginInterface {
  isAuth: boolean,
  setIsAuth: Dispatch<SetStateAction<boolean>>
}

type FormData = {
  email: string;
  password: string;
};

export const LogIn: React.FC<LoginInterface> = ({ isAuth, setIsAuth }) => {
  const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (formData: FormData) => {
    try {
      const data = await axios.post('/login', {...formData});
      setIsAuth(true);
      
      if ('token' in data.data) {
        window.localStorage.setItem('token', data.data.token);
      }
    }
    catch (err) {
      console.log("ERROR ", err);
    }
  };

  if (isAuth) {
    return <Navigate to={'/home'} />
  }

  return (
    <div className='container'>
      <div className='flex justify-between items-center h-screen'>
        <div className='w-[440px] h-[440px] bg-slate-700'></div>
        <div className='w-[440px] h-[440px] flex items-center'>
          <div className='w-[70%]'>
            <h2 className='text-3xl font-medium text-color-title'>Вход</h2>
            <form className='form flex flex-col gap-3 mt-3' onSubmit={handleSubmit(onSubmit)}>
              <input className='p-2 px-3 outline-none rounded text-color-text' type='email' {...register('email', { required: true })} placeholder='Введите email'/>
              <input className='p-2 px-3 outline-none rounded text-color-text' type="password" { ...register('password', { required: 'введите пароль' }) } placeholder='Введите пароль'/>
              <div className='flex gap-4 mt-4'>
                <button className='p-2 px-5 rounded bg-button text-white' type='submit'>Войти</button>
                <button className='p-2 px-3 text-sm underline decoration-color-title text-button'><Link to={'/register'}>Зарегистрироваться</Link></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
