import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom'
import axios from '../axios';

interface RegInterface {
    isAuth: boolean,
    setIsAuth: Dispatch<SetStateAction<boolean>>
  }

type FormData = {
  name: string,
  surname: string,
  username: string,
  email: string;
  password: string;
}

export const Register: React.FC<RegInterface> = ({ isAuth, setIsAuth }) => {
    const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm<FormData>({
        defaultValues: {
          name: "",
          surname: "",
          username: "",
          email: "",
          password: "",
        },
        mode: 'onChange',
      });
    
      const onSubmit = async (formData: FormData) => {
        try {
          const data = await axios.post('/register', {...formData});
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
                <h2 className='text-3xl font-medium text-color-title'>Регистрация</h2>
                <form className='form flex flex-col gap-3 mt-3' onSubmit={handleSubmit(onSubmit)}>
                  <input className='p-2 px-3 outline-none rounded text-color-text' type='name' {...register('name', { required: 'Имя должно быть не короче 3 символов' })} placeholder='Имя'/>
                  <input className='p-2 px-3 outline-none rounded text-color-text' type="name" {...register('surname', { required: 'Фамилия должна быть не короче 3 символов' })} placeholder='Фамилия'/>
                  <input className='p-2 px-3 outline-none rounded text-color-text' type="name" {...register('username', { required: 'Данное имя пользователя уже занято' })} placeholder='Имя пользователя'/>
                  <input className='p-2 px-3 outline-none rounded text-color-text' type="email" {...register('email', { required: 'Неверный email' })} placeholder='Ваш email'/>
                  <input className='p-2 px-3 outline-none rounded text-color-text' type="password" {...register('password', { required: 'Пароль должен быть не менее 8 символов'})} placeholder='Придумайте пароль'/>
                  {/* <input className='p-2 px-3 outline-none rounded text-color-text' type="password" {...register('password', { required: true })} placeholder='Повторите пароль'/> */}
                  <div className='flex gap-4 mt-4'>
                    <button type='submit' className='p-2 px-5 rounded bg-button text-white'>Зарегистрироваться</button>
                    <button className='p-2 px-3 text-sm underline decoration-color-title text-button cursor-auto'><Link to={'/login'}>Войти</Link></button>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    )
}
