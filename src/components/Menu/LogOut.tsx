import React, { Dispatch, SetStateAction } from 'react'

import './LogOut.css';
import { Navigate } from 'react-router-dom';

interface MenuInterface {
    setMenuLogOut: Dispatch<SetStateAction<boolean>>,
    setIsAuth: Dispatch<SetStateAction<boolean>>,
}

export const LogOut: React.FC<MenuInterface> = ({ setMenuLogOut, setIsAuth }) => {
    const handleClickCloseModal = () => {
        setMenuLogOut(false);
    };

    const handleLogOut = () => {
        localStorage.removeItem("logged_in");
        setMenuLogOut(false);
        setIsAuth(false);
    };

    return (
        <div className='log-out' onClick={handleClickCloseModal}>
            <div className='bg-white rounded-lg' onClick={(e) => e.stopPropagation()}>
                <div className='p-6 px-8'>
                    <h3>Вы действительно хотите выйти с аккаунта</h3>
                    <div className='flex justify-center gap-6 mt-8'>
                        <button className='p-1 px-8 bg-button text-white rounded' onClick={handleClickCloseModal}>Нет</button>
                        <button className='p-1 px-8 bg-button text-white rounded' onClick={handleLogOut}>Да</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
