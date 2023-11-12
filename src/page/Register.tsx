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
  // upload img
  const [image, setImage] = useState<string>("");
  const [uploadingImg, setUploadingImg] = useState<boolean>(false);
  const [imagePrev, setImagePrev] = useState<string>("");

  const validateImg = (e: any) => {
    const file = e.target.files[0];
    if (file >= 1048576) {
      return alert("Вы не можете загрузить картинку которая больше 1 мб");
    } else {
      setImage(file);
      setImagePrev(URL.createObjectURL(file)); 
    };
  };

  // const uploadImg = () => {
  //   const data = new FormData();

  //   data.append('file', image);
  //   data.append('upload_preset', '');
  // };

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
            window.localStorage.setItem('logged_in', data.data.token);
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
                  <div className='w-[100px] h-[100px] rounded-full relative'>
                    <img className='rounded-full' src={imagePrev || "https://cs13.pikabu.ru/post_img/2023/02/13/8/1676295972191096669.jpg"} alt="" />
                    <label htmlFor='image-upload' className='absolute bottom-1 right-2 cursor-pointer'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clipPath="url(#clip0_80_10)">
                          <rect width="16" height="16" rx="8" fill="#B282FF"/>
                          <path d="M12.6666 7.33331H8.66658V3.33331H7.33325V7.33331H3.33325V8.66665H7.33325V12.6666H8.66658V8.66665H12.6666V7.33331Z" fill="white"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_80_10">
                            <rect width="16" height="16" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </label>
                    <input type="file" id='image-upload' hidden accept='image/png, image/jpeg' onChange={validateImg} />
                  </div>
                  <input className='p-2 px-3 outline-none rounded text-color-text focus' type='name' {...register('name', { required: 'Имя должно быть не короче 3 символов' })} placeholder='Имя'/>
                  <input className='p-2 px-3 outline-none rounded text-color-text focus' type="name" {...register('surname', { required: 'Фамилия должна быть не короче 3 символов' })} placeholder='Фамилия'/>
                  <input className='p-2 px-3 outline-none rounded text-color-text focus' type="name" {...register('username', { required: 'Данное имя пользователя уже занято' })} placeholder='Имя пользователя'/>
                  <input className='p-2 px-3 outline-none rounded text-color-text focus' type="email" {...register('email', { required: 'Неверный email' })} placeholder='Ваш email'/>
                  <input className='p-2 px-3 outline-none rounded text-color-text focus' type="password" {...register('password', { required: 'Пароль должен быть не менее 8 символов'})} placeholder='Придумайте пароль'/>
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
