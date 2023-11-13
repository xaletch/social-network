import React, { Dispatch, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, Link } from 'react-router-dom';
import axios from '../axios';
import { useDispatch } from 'react-redux';
import { fetchLogin } from '../redux/slices/loginSlice';
import { AnyAction } from 'redux';
interface LoginInterface {
  isAuth: boolean,
  setIsAuth: Dispatch<SetStateAction<boolean>>,
};

type Data = {
  email: string;
  password: string;
};

export const LogIn: React.FC<LoginInterface> = ({ isAuth, setIsAuth }) => {
  const dispatch = useDispatch()

  const [errorMessage, setErrorMessage] = useState('');
  const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm<Data>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (formData: Data) => {
    try {
      dispatch(fetchLogin(formData) as unknown as AnyAction);
    } catch (error) {}
  };

  return (
    <div className='container'>
      <div className='flex justify-between items-center h-screen'>
        <div className='w-[440px] h-[440px] bg-slate-700'></div>
        <div className='w-[440px] h-[440px] flex items-center'>
          <div className='w-[70%]'>
            <h2 className='text-3xl font-medium text-color-title'>Вход</h2>
            <form className='form flex flex-col mt-3' onSubmit={handleSubmit(onSubmit)}>
              <input className={`${errorMessage === 'Неверный логин или пароль' ? 'incorrect' : 'focus'} p-2 px-3 outline-none rounded text-color-text`} type='email' {...register('email', { required: true })} placeholder='Введите email'/>
              <label className={`${errorMessage !== '' ? 'text-red' : 'text-grey'} text-sm mb-3 mt-1 ml-1`}>{errorMessage === '' ? 'Введите Email' : 'Неверный логин или пароль'}</label>
              <input className={`${errorMessage === 'Неверный логин или пароль' ? 'incorrect' : 'focus'} p-2 px-3 outline-none rounded text-color-text`} type="password" { ...register('password', { required: 'введите пароль' }) } placeholder='Введите пароль'/>
              <label className={`${errorMessage !== '' ? 'text-red' : 'text-grey'} text-sm mb-3 mt-1 ml-1`}>{errorMessage === '' ? 'Введите пароль' : 'Неверный логин или пароль'}</label>
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

