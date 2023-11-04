import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search/Search';

interface DataInterface {
    avatarUrl?: string | undefined,
    name?: string | undefined,
    surname?: string | undefined,
    username?: string | undefined,
}

export const Header: React.FC<DataInterface> = ({ avatarUrl, name, surname, username }) => {
  return (
    <div className='w-screen fixed top-0 left-0 z-10 bg-secondary3'>
        <div className='container'>
            <div className='p-4 px-3 flex justify-between items-center'>
                <div className='flex items-center gap-10'>
                    <Link to={'home'}>
                        <div>
                            <h1>SocialNetwork</h1>
                        </div>
                    </Link>
                    <Search />
                </div>
                <div className='flex'>
                    <div className='flex items-center gap-2'>
                        <Link to={'/home'}>
                            <div className='p-1 px-3'>
                                <p>Главная</p>
                            </div>
                        </Link>
                        <Link to={'/message'}>
                            <div className='p-1 px-3 relative'>
                                <p>Сообщения</p>
                                <div className='w-[18px] h-[18px] flex justify-center items-center absolute top-[-2px] right-[-7px] text-[12px] text-white bg-button rounded-full rounded-bl-none'>
                                    <span>10</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <Link className='ml-7' to={`profile/${username}`}>
                    <div className='flex items-center cursor-pointer'>
                        <div className='w-[40px] h-[40px] bg-grey rounded-full'>
                            <img className='rounded-full' src={avatarUrl} alt="" />
                        </div>
                        <div className='ml-2'>
                            <p className='text-sm leading-none'>{name}</p>
                            <p className='text-sm leading-none'>{surname}</p>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
