import React, { useState } from 'react'

export const Search = () => {
  const [search, setSearch] = useState<string>('');

  const changeSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {}

  const handleResetSearch = () => {
    setSearch('');
  };

  return (
    <div className='relative'>
      <div className='w-[32px] h-[35px] flex justify-center items-center absolute left-0 top-0 cursor-pointer' onClick={handleSearch}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 19 19" fill="none">
          <path d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z" fill="#C9C9C9"/>
        </svg>
      </div>
      <input className='focus p-2 px-8 outline-none rounded-lg text-sm text-color-text2' type="text" value={search} onChange={changeSearch} placeholder='Поиск' />
      {search && (
        <div className='w-[35px] h-[35px] flex justify-center items-center absolute right-0 top-0 cursor-pointer' onClick={handleResetSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M10.192 0.343994L5.949 4.58599L1.707 0.343994L0.292999 1.75799L4.535 5.99999L0.292999 10.242L1.707 11.656L5.949 7.41399L10.192 11.656L11.606 10.242L7.364 5.99999L11.606 1.75799L10.192 0.343994Z" fill="#C9C9C9"/>
          </svg>
        </div>
      )}
    </div>
  )
}
