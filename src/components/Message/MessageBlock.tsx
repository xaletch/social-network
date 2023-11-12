import React, { useState } from 'react'
import { MessageUser } from './MessageUser';

type MessageType = {
  text: string,
  isUser: boolean,
}

const messages = [
  { text: 'Привет!', isUser: true },
  { text: 'Как дела?', isUser: true },
  { text: 'Привет, у меня все хорошо!', isUser: false },
  { text: 'Что нового?', isUser: true },
  { text: 'Ничего особенного.', isUser: false },
  { text: 'Каким образом Telegram обеспечивает безопасность и приватность сообщений?', isUser: false },
  { text: 'Мы используем протоколы MTProto, которые обеспечивают шифрование на всех уровнях передачи данных. Это включает в себя шифрование конфиденциальных сообщений, самоуничтожающиеся сообщения, возможность создания защищенных чатов и многое другое. Мы также обеспечиваем возможность блокировки и удаления сообщений даже после отправки, чтобы пользователи могли сохранять свою приватность.', isUser: true },
  { text: 'Спасибо за разъяснения! У меня еще небольшой вопрос: какими основными принципами руководствуетесь вы как предприниматель?', isUser: false },
  { text: 'Я верю в свободу, приватность и открытость. Все, что мы делаем в Telegram и других проектах, направлено на защиту прав и свобод пользователей. Мы также стремимся постоянно инновировать и привносить новые технологии, чтобы улучшать жизнь людей и создавать полезные и удобные продукты.', isUser: true },
];

export const MessageBlock = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false)
  const [searchMessage, setSearchMessage] = useState<string>('');

  const handleSearchMessage = () => {
    setOpenSearch(!openSearch);
  };

  const changeSearch = (e: any) => {
    setSearchMessage(e.target.value);
  };

  const handleSearch = () => {};

  const handleResetSearch = () => {
    setSearchMessage('');
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className='bg-white w-[890px] relative' style={{paddingTop: '72px'}}>
      <div className='p-2 px-4 bg-white flex justify-between items-center relative z-10 shadow-sm'>
        <div>
            <p className='text-base'>Павел Дуров</p>
            <div className='leading-none'>
              <span className='text-sm'>был(а) недавно</span>
            </div>
        </div>
        {/* {openSearch && ( */}
          <div className={`${openSearch ? 'active' : ''} w-[300px] relative msg-input`}>
            <input className={`${openSearch ? 'active' : ''} shadow shadow-purple-300 rounded-md p-2 px-7 text-sm input-transition`} value={searchMessage} type="text" onChange={changeSearch} placeholder='Поиск сообщений'/>
            <button className='w-[30px] h-[35px] flex justify-center items-center absolute top-0 left-0'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 19 19" fill="none">
                <path d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z" fill="#C9C9C9"/>
              </svg>
            </button>
            {searchMessage && (
              <button className='w-[30px] h-[35px] flex justify-center items-center absolute top-0 right-0' onClick={handleResetSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10.192 0.343994L5.949 4.58599L1.707 0.343994L0.292999 1.75799L4.535 5.99999L0.292999 10.242L1.707 11.656L5.949 7.41399L10.192 11.656L11.606 10.242L7.364 5.99999L11.606 1.75799L10.192 0.343994Z" fill="#C9C9C9"/>
                </svg>
              </button>
            )}
          </div>
        {/* )} */}
        <div className='flex gap-1'>
          <button className='w-6 h-6 flex justify-center items-center' onClick={handleSearchMessage}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10.9835 10.2203C11.8753 9.1395 12.4386 7.7533 12.4386 6.22614C12.4386 2.79589 9.64576 0 6.21929 0C2.79281 0 0 2.79589 0 6.22614C0 9.65639 2.79281 12.4523 6.21929 12.4523C7.72131 12.4523 9.12945 11.9119 10.209 10.9956L15.0436 15.8355C15.161 15.953 15.3018 16 15.4426 16C15.5834 16 15.7242 15.953 15.8416 15.8355C16.0528 15.6241 16.0528 15.2482 15.8416 15.0367L10.9835 10.2203ZM6.19582 11.3245C3.37954 11.3245 1.10304 9.04552 1.10304 6.22614C1.10304 3.40676 3.37954 1.12775 6.19582 1.12775C9.0121 1.12775 11.2886 3.40676 11.2886 6.22614C11.2886 9.04552 9.0121 11.3245 6.19582 11.3245Z" fill="black"/>
            </svg>
          </button>
          <button className='w-6 h-6 flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="18" viewBox="0 0 4 18" fill="none">
              <path d="M2 4C2.39556 4 2.78224 3.8827 3.11114 3.66294C3.44004 3.44318 3.69639 3.13082 3.84776 2.76537C3.99914 2.39992 4.03874 1.99778 3.96157 1.60982C3.8844 1.22186 3.69392 0.865492 3.41421 0.585787C3.13451 0.306082 2.77814 0.115601 2.39018 0.0384303C2.00222 -0.0387401 1.60009 0.000866562 1.23463 0.152242C0.869182 0.303617 0.556825 0.559962 0.337062 0.88886C0.117299 1.21776 1.07779e-06 1.60444 1.07779e-06 2C1.07779e-06 2.53043 0.210715 3.03914 0.585788 3.41421C0.960861 3.78929 1.46957 4 2 4ZM2 14C1.60444 14 1.21776 14.1173 0.888861 14.3371C0.559963 14.5568 0.303617 14.8692 0.152242 15.2346C0.000866562 15.6001 -0.0387401 16.0022 0.0384303 16.3902C0.115601 16.7781 0.306083 17.1345 0.585788 17.4142C0.865493 17.6939 1.22186 17.8844 1.60982 17.9616C1.99778 18.0387 2.39992 17.9991 2.76537 17.8478C3.13082 17.6964 3.44318 17.44 3.66294 17.1111C3.8827 16.7822 4 16.3956 4 16C4 15.4696 3.78929 14.9609 3.41421 14.5858C3.03914 14.2107 2.53043 14 2 14ZM2 7C1.60444 7 1.21776 7.1173 0.888861 7.33706C0.559963 7.55682 0.303617 7.86918 0.152242 8.23463C0.000866562 8.60009 -0.0387401 9.00222 0.0384303 9.39018C0.115601 9.77814 0.306083 10.1345 0.585788 10.4142C0.865493 10.6939 1.22186 10.8844 1.60982 10.9616C1.99778 11.0387 2.39992 10.9991 2.76537 10.8478C3.13082 10.6964 3.44318 10.44 3.66294 10.1111C3.8827 9.78224 4 9.39556 4 9C4 8.46957 3.78929 7.96086 3.41421 7.58579C3.03914 7.21072 2.53043 7 2 7Z" fill="black"/>
            </svg>
          </button>
        </div>
      </div>
      <div className='w-full h-full overflow-y-auto scroll absolute top-0'>
        <div className='px-4 pt-36 pb-28 grid message-grid gap-1'>
          {messages.map((item: MessageType, index) => <MessageUser text={item.text} isUser={item.isUser}  key={index} />)}
        </div>
      </div>
      <form className='fixed bottom-0 w-[883px] px-14 p-4 bg-white' onSubmit={handleSubmit}>
        <div className='cursor-pointer w-[40px] h-[80px] flex justify-center items-center absolute top-0 left-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19.937 8.68C19.926 8.648 19.917 8.617 19.904 8.586C19.8566 8.47747 19.7902 8.37825 19.708 8.293L13.708 2.293C13.6228 2.21078 13.5235 2.14441 13.415 2.097C13.385 2.083 13.353 2.075 13.321 2.064C13.2373 2.03553 13.1502 2.01837 13.062 2.013C13.04 2.011 13.021 2 13 2H6C4.897 2 4 2.897 4 4V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V9C20 8.979 19.989 8.96 19.987 8.938C19.9819 8.85016 19.9651 8.7634 19.937 8.68ZM16.586 8H14V5.414L16.586 8ZM6 20V4H12V9C12 9.26522 12.1054 9.51957 12.2929 9.70711C12.4804 9.89464 12.7348 10 13 10H18L18.002 20H6Z" fill="black"/>
          </svg>
        </div>
        <input className='message-input shadow-sm shadow-purple-300 p-3 px-6 pr-10 w-full rounded-md' type="text" placeholder='Написать сообщение' />
        <div className='absolute top-0 right-3 flex g-1'>
          <div className='cursor-pointer w-[40px] h-[80px] flex justify-center items-center mr-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30" fill="none">
              <path d="M20.1 19.5C18.75 21 16.95 21.75 15 21.75C13.05 21.75 11.25 20.85 9.90005 19.5C9.60005 19.2 9.60005 18.75 9.90005 18.45C10.2 18.15 10.65 18.15 10.95 18.45C12 19.65 13.5 20.25 15 20.25C16.5 20.25 18 19.65 18.9 18.45C19.2 18.15 19.65 18.15 19.95 18.45C20.25 18.75 20.25 19.2 20.1 19.5Z" fill="black"/>
              <path d="M15 4.5C9.15 4.5 4.5 9.15 4.5 15C4.5 20.85 9.15 25.5 15 25.5C20.85 25.5 25.5 20.85 25.5 15C25.5 9.15 20.85 4.5 15 4.5ZM9 12C9 11.1 9.6 10.5 10.5 10.5C11.4 10.5 12 11.1 12 12C12 12.9 11.4 13.5 10.5 13.5C9.6 13.5 9 12.9 9 12ZM19.5 13.5C18.6 13.5 18 12.9 18 12C18 11.1 18.6 10.5 19.5 10.5C20.4 10.5 21 11.1 21 12C21 12.9 20.25 13.5 19.5 13.5Z" stroke="black" stroke-miterlimit="10"/>
            </svg>
          </div>
          <button type='submit' className='cursor-pointer w-[40px] h-[80px] flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 4H6C4.897 4 4 4.897 4 6V11H6V8L12.4 12.8C12.5732 12.9297 12.7837 12.9998 13 12.9998C13.2163 12.9998 13.4268 12.9297 13.6 12.8L20 8V17H12V19H20C21.103 19 22 18.103 22 17V6C22 4.897 21.103 4 20 4ZM13 10.75L6.666 6H19.334L13 10.75Z" fill="black"/>
              <path d="M2 12H9V14H2V12ZM4 15H10V17H4V15ZM7 18H11V20H7V18Z" fill="black"/>
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}
