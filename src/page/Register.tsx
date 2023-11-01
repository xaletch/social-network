import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type UserRegister = {
    name: string,
    surname: string,
    userName: string,
    email: string,
    password: string,
  }

export const Register = () => {
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [pasComparison, setPasComparison] = useState<string>('');

    const onChangeName = (e: any) => {
        setName(e.target.value);
    };

    const onChangeSurname = (e: any) => {
        setSurname(e.target.value);
    };

    const onChangeUserName = (e: any) => {
        setUserName(e.target.value);
    };

    const onChangeEmail = (e: any) => {
        setEmail(e.target.value);
    };
    
    const onChangePassword = (e: any) => {
        setPassword(e.target.value);
    };

    const onChangePasComparison = (e: any) => {
        setPasComparison(e.target.value);
    };

    useEffect(() => {
        if (password === pasComparison && pasComparison !== '') {
            console.log('пароли совпали, можно регистрироваться!')
        }
    }, [password, pasComparison])

    return (
        <div className='container'>
            <div className='flex justify-between items-center h-screen'>
                <div className='w-[440px] h-[440px] bg-slate-700'></div>
                <div className='w-[440px] h-[440px] flex items-center'>
                    <div className='w-[70%]'>
                        <h2 className='text-3xl font-medium text-color-title'>Регистрация</h2>
                        <div>{name} {surname} {userName} {email} {password}</div>
                        <div className='form flex flex-col gap-3 mt-3'>
                            <input className='p-2 px-3 outline-none rounded text-color-text' type='name' value={name} onChange={onChangeName} placeholder='Имя'/>
                            <input className='p-2 px-3 outline-none rounded text-color-text' type="name" value={surname} onChange={onChangeSurname} placeholder='Фамилия'/>
                            <input className='p-2 px-3 outline-none rounded text-color-text' type="name" value={userName} onChange={onChangeUserName} placeholder='Имя пользователя'/>
                            <input className='p-2 px-3 outline-none rounded text-color-text' type="email" value={email} onChange={onChangeEmail} placeholder='Ваш email'/>
                            <input className='p-2 px-3 outline-none rounded text-color-text' type="password" value={password} onChange={onChangePassword} placeholder='Придумайте пароль'/>
                            <input className='p-2 px-3 outline-none rounded text-color-text' type="password" value={pasComparison} onChange={onChangePasComparison} placeholder='Повторите пароль'/>
                            <div className='flex gap-4 mt-4'>
                                <Link to={''}>
                                    <button className='p-2 px-5 rounded bg-button text-white'>Зарегистрироваться</button>
                                </Link>
                                <button className='p-2 px-3 text-sm underline decoration-color-title text-button cursor-auto'><Link to={'/login'}>Войти</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
