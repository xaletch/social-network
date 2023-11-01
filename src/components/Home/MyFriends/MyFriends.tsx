import React, { useState } from 'react'
import { Friend } from '.'

export const MyFriends = () => {
  const [searchFriend, setSearchFriend] = useState<string>('');

  const changeSearch = (e: any) => {
    setSearchFriend(e.target.value);
  };

  const handleSearch = () => {}

  const handleResetSearch = () => {
    setSearchFriend('');
  };

  return (
    <div className='w-[280px] h-[315px] bg-white rounded-xl'>
        <div className='p-5 h-full'>
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl'>Мои друзья:</h2>
              <div>
                <span className='text-2xl'>3</span>
              </div>
            </div>
            <div className='mt-2 flex flex-col gap-3'>
              <Friend />
              <Friend />
              <Friend />
            </div>
            <div className='mt-6 w-full relative'>
              <div className='w-[32px] h-[35px] flex justify-center items-center absolute left-0 top-0 cursor-pointer' onClick={handleSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 19 19" fill="none">
                  <path d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z" fill="#C9C9C9"/>
                </svg>
              </div>
              <input className='w-full p-2 px-8 shadow-search rounded text-sm text-color-text2' type="text" value={searchFriend} onChange={changeSearch} placeholder='Найти друзей' />
              {searchFriend && (
                <div className='w-[35px] h-[35px] flex justify-center items-center absolute right-0 top-0 cursor-pointer' onClick={handleResetSearch}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10.192 0.343994L5.949 4.58599L1.707 0.343994L0.292999 1.75799L4.535 5.99999L0.292999 10.242L1.707 11.656L5.949 7.41399L10.192 11.656L11.606 10.242L7.364 5.99999L11.606 1.75799L10.192 0.343994Z" fill="#C9C9C9"/>
                  </svg>
                </div>
              )}
            </div>
        </div>
    </div>
  )
}
