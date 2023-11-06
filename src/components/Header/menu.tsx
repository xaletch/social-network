import React, { Dispatch, SetStateAction } from 'react'

interface MenuInterface {
    setOpenMenu: Dispatch<SetStateAction<boolean>>,
    setMenuLogOut: Dispatch<SetStateAction<boolean>>,
}

export const Menu: React.FC<MenuInterface> = ({ setOpenMenu, setMenuLogOut }) => {

    const onMouseLeave = () => {
        setOpenMenu(false);
    };

    const handleLogOut = () => {
        setMenuLogOut(true)
    }
    
    return (
        <div className='absolute bottom-[-78px] right-0 bg-white shadow rounded-md' onMouseLeave={onMouseLeave}>
            <div className='p-2 px-3 text-sm text-center'>
                <p className='p-1 cursor-pointer mb-1'>Настройки</p>
                <p className='p-1 cursor-pointer mb-1 text-red' onClick={handleLogOut}>Выйти</p>
            </div>
        </div>
    )
}
