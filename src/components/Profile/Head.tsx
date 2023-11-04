import React from 'react'
import { CheckMark } from '../CheckMark'
import { UserOnlineOrOffline } from '../UserOnlineOrOffline/UserOnlineOrOffline'

type Profile = {
    avatarUrl?: string | undefined,
    name?: string | undefined,
    surname?: string | undefined,
    username?: string | undefined,
}

export const Head: React.FC<Profile> = ({ avatarUrl, name, surname }) => {
  return (
    <div className=''>
        <div className='flex gap-4'>
            <div className='flex'>
                <div className='w-[280px] h-[280px] bg-loading rounded-xl'>
                    <img className='rounded-xl' src={avatarUrl} alt="avatar" />
                </div>
            </div>
            <div className='flex flex-col w-full gap-3'>
                <div className='h-[180px] bg-loading rounded-xl'>
                    <div className='h-full rounded-xl backgroundImage' style={{backgroundImage: "url('https://techdegree.com.br/images/jscode.jpeg?nf_resize=fit&w=1280&h=600')"}}></div>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <div className='flex items-center gap-1'>
                            <h2 className='text-3xl font-medium'>{name} {surname}</h2>
                            <CheckMark />
                            <div className='ml-1'>
                                <UserOnlineOrOffline />
                            </div>
                        </div>
                        <div className='w-[400px] text-sm leading-tight text-color-text2'>
                            <p>Умение размышлять, обучаться, и преодолевать преграды - это ключ к достижению великих высот</p>
                        </div>
                    </div>
                    <button className='p-2 px-4 h-10 bg-dark text-white text-sm rounded-md hover:opacity-90'>Редактировать профиль</button>
                </div>
            </div>
        </div>
    </div>
  )
}
