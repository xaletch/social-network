import React from 'react'
import { UserMessage } from '../components/Message/UserMessage'
import { MessageBlock } from '../components/Message/MessageBlock'

export const Message = () => {
  return (
    <div className='relative top-0'>
      <div className='container'>
        <div className='flex h-screen'>
          <div className='w-[300px] h-[100%] bg-white rounded-xl overflow-y-auto scroll'>
            <div style={{paddingTop: '72px'}}>
            <div className='p-2 flex items-center justify-between'>
              <h2 className='text-3xl'>Чаты</h2>
              <span>16</span>
            </div>
              {Array(16).fill(null).map((obj, index) => (
                <UserMessage key={index} />
              ))}
            </div>
          </div>
          <MessageBlock />
        </div>
      </div>
    </div>
  )
}
