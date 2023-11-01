import React from 'react'

export const UserMessage = () => {
  return (
    <div className='flex justify-between items-start p-2 px-2 cursor-pointer hover:bg-silver'>
      <div className='flex gap-2 items-center'>
        <div className='w-[45px] h-[45px] backgroundImage bg-grey rounded-full' style={{backgroundImage: 'url("https://n1s2.hsmedia.ru/97/ad/89/97ad896b7eda360be8a60e17cf3ca5e8/549x600_1_e8544d245cab330cf394c67b23496f58@900x983_0xac120003_17301859641650093743.jpg")'}}></div>
        <div className='flex flex-col text-[#252525]'>
          <div className='flex gap-1 leading-none font-medium'>
            <p className='text-base'>Павел</p>
            <p className='text-base'>Дуров</p>
          </div>
          <div>
            <span className='text-sm'>Однако, в своей удивительност...</span>
          </div>
        </div>
      </div>
      <div>
        <div className='text-sm'>18:52</div>
      </div>
    </div>
  )
}
