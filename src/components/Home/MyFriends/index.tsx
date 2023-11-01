import React from 'react'

export const Friend = () => {
  return (
    <div className='shadow shadow-friend flex justify-between items-center p-1 px-2 rounded-md cursor-pointer'>
        <div className='flex gap-2 items-center'>
            <div className='w-[45px] h-[45px] backgroundImage bg-grey rounded-full' style={{backgroundImage: 'url("https://n1s2.hsmedia.ru/97/ad/89/97ad896b7eda360be8a60e17cf3ca5e8/549x600_1_e8544d245cab330cf394c67b23496f58@900x983_0xac120003_17301859641650093743.jpg")'}}>
            </div>
            <div className='flex flex-col text-[#252525]'>
                <div className='flex gap-1'>
                    <p className='text-base leading-none'>Павел</p>
                    <p className='text-base leading-none'>Дуров</p>
                </div>
                <div className='leading-none'>
                    <span className='text-sm'>был(а) недавно</span>
                </div>
            </div>
        </div>
        <div>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                    <path d="M8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0Z" fill="black"/>
                </svg>
            </button>
        </div>
    </div>
  )
}
