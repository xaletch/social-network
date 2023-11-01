import React from 'react'

type MessageType = {
    text: string,
    isUser: boolean,
  }

export const MessageUser: React.FC<MessageType> = ({ text, isUser }) => {
  return (
    <div className={`${isUser ? 'grid-left' : 'grid-right justify-end'} flex text-start`}>
        <div className={`bg-gradient-to-r from-purple-300 to-purple-500 rounded-xl ${isUser ? 'rounded-tl' : 'rounded-tr'}`}>
            <div className='p-1 px-3 text-white flex items-end gap-3 text-base'>
                <p>{text}</p>
                <div className='flex'>
                    <span className='text-sm'>22:27</span>
                    <div className='ml-2 mt-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="9" viewBox="0 0 17 9" fill="none">
                            <path d="M-0.00488281 5.45162L3.94762 8.46829L10.2943 1.21495L9.03928 0.118286L3.71928 6.19829L1.00512 4.12662L-0.00488281 5.45162ZM16.1276 1.21495L14.8726 0.118286L9.56512 6.18412L8.93762 5.68245L7.89595 6.98412L9.76845 8.48245L16.1276 1.21495Z" fill="#FFF"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
