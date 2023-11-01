import React from 'react'
import { CheckMark } from '../../../CheckMark'
import { Link } from 'react-router-dom'

export const NewsPost = () => {
  return (
    <div className='bg-[#FFF] rounded-xl px-5 pb-5 pt-1'>
      <div className='p-2 flex justify-between items-center'>
        <Link to={''}>
          <div className='flex items-center'>
            <div className='w-[40px] h-[40px] bg-loading rounded-full'>
              <img className='rounded-full' src="https://cs13.pikabu.ru/post_img/2023/02/13/8/1676295972191096669.jpg" alt="" />
            </div>
            <div className='ml-2 flex flex-col'>
              <div className='flex items-center gap-1'>
                <p className='text-x1 leading-none'>Колесников Кирилл</p>
                <CheckMark />
              </div>
              <div className='leading-none'>
                <span className='text-sm'>29.10.23 10:37</span>
              </div>
            </div>
          </div>
        </Link>
        <button className='w-[20px] h-[20px] flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
            <path d="M8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0Z" fill="black"/>
          </svg>
        </button>
      </div>
      <div className='rounded-lg'>
        <img className='w-full rounded-lg' src="https://sneg.top/uploads/posts/2023-03/thumbs/1679649938_sneg-top-p-zastavka-rabochii-stol-4k-krasivo-2.jpg" alt="" />
      </div>
      <div className='mt-2'>
        <h3>Природа, удивительна!</h3>
        <div>
          <p className='mt-1 leading-5'>Величественные горы, бескрайние океаны, пышные леса и многообразие живых существ - все это чудеса, созданные самой природой. Независимо от того, где мы находимся, всюду можно встретить потрясающие картины природы, которые вызывают благоговение.</p>
        </div>
      </div>
      <div className='mt-4'>
        <div className='flex text-center justify-between'>
          <div className='flex items-center'>
            <div className='flex gap-2'>
              <button className='p-1 px-3 bg-button rounded flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 17" fill="none">
                  <path d="M15.6666 5.66663H10.99L11.9258 2.86079C12.0941 2.35413 12.0091 1.79246 11.6966 1.35913C11.3841 0.925793 10.8775 0.666626 10.3433 0.666626H8.99996C8.75246 0.666626 8.51829 0.776626 8.35913 0.966626L4.44246 5.66663H2.33329C1.41413 5.66663 0.666626 6.41413 0.666626 7.33329V14.8333C0.666626 15.7525 1.41413 16.5 2.33329 16.5H13.4225C13.7615 16.4988 14.0923 16.3948 14.371 16.2017C14.6497 16.0086 14.8632 15.7354 14.9833 15.4183L17.2808 9.29246C17.3157 9.19889 17.3335 9.09982 17.3333 8.99996V7.33329C17.3333 6.41413 16.5858 5.66663 15.6666 5.66663ZM2.33329 7.33329H3.99996V14.8333H2.33329V7.33329ZM15.6666 8.84913L13.4225 14.8333H5.66663V6.80163L9.38996 2.33329H10.345L9.04329 6.23579C9.00104 6.36106 8.98925 6.49459 9.00891 6.62532C9.02857 6.75604 9.07911 6.8802 9.15635 6.9875C9.23358 7.09479 9.33527 7.18212 9.453 7.24226C9.57073 7.3024 9.7011 7.33361 9.83329 7.33329H15.6666V8.84913Z" fill="white"/>
                </svg>
                <span className='text-white'>209 тыс.</span>
              </button>
              <button className='p-1 px-3 bg-button rounded flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 17" fill="none">
                  <path d="M15.6666 0.5H4.57746C4.23839 0.501126 3.90764 0.605132 3.62894 0.798269C3.35025 0.991405 3.13674 1.26458 3.01663 1.58167L0.719127 7.7075C0.684243 7.80107 0.666461 7.90014 0.666627 8V9.66667C0.666627 10.5858 1.41413 11.3333 2.33329 11.3333H7.00996L6.07496 14.1392C5.9916 14.3897 5.96883 14.6564 6.00852 14.9175C6.04821 15.1785 6.14923 15.4264 6.30329 15.6408C6.61663 16.0742 7.12163 16.3333 7.65663 16.3333H8.99996C9.24746 16.3333 9.48163 16.2233 9.64079 16.0333L13.5575 11.3333H15.6666C16.5858 11.3333 17.3333 10.5858 17.3333 9.66667V2.16667C17.3333 1.2475 16.5858 0.5 15.6666 0.5ZM8.60913 14.6667H7.65496L8.95663 10.7633C8.99833 10.6381 9.0097 10.5048 8.9898 10.3743C8.9699 10.2439 8.91929 10.12 8.84216 10.0129C8.76502 9.90583 8.66355 9.8186 8.54611 9.75841C8.42866 9.69821 8.2986 9.66677 8.16663 9.66667H2.33329V8.15083L4.57746 2.16667H12.3333V10.1983L8.60913 14.6667ZM14 9.66667V2.16667H15.6666L15.6675 9.66667H14Z" fill="white"/>
                </svg>
                <span className='text-white'>400</span>
              </button>
            </div>
            <div className='ml-4'>
              <button className='p-1 px-3 bg-button rounded flex items-center gap-2 text-white'>
                <span>10 тыс.</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.486 2 2 5.589 2 10C2 12.908 3.898 15.515 7 16.934V22L12.34 17.995C17.697 17.852 22 14.32 22 10C22 5.589 17.514 2 12 2ZM12 16H11.667L9 18V15.583L8.359 15.336C5.67 14.301 4 12.256 4 10C4 6.691 7.589 4 12 4C16.411 4 20 6.691 20 10C20 13.309 16.411 16 12 16Z" fill="#FFF"/>
                  <path d="M7 7H17V9H7V7ZM7 11H14V13H7V11Z" fill="#FFF"/>
                </svg>
              </button>
            </div>
          </div>
          <div className='flex items-center gap-1'>
            <span className='text-sm'>1.5m</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
              <path d="M11.7001 6.30036C11.7001 7.01649 11.4156 7.70328 10.9092 8.20965C10.4029 8.71603 9.71607 9.00051 8.99995 9.00051C8.28383 9.00051 7.59703 8.71603 7.09066 8.20965C6.58428 7.70328 6.2998 7.01649 6.2998 6.30036C6.2998 5.58424 6.58428 4.89745 7.09066 4.39107C7.59703 3.8847 8.28383 3.60022 8.99995 3.60022C9.71607 3.60022 10.4029 3.8847 10.9092 4.39107C11.4156 4.89745 11.7001 5.58424 11.7001 6.30036Z" fill="#0D0D0D"/>
              <path d="M17.9051 5.89802C15.9628 2.01251 12.5138 0 9 0C5.48711 0 2.03723 2.01251 0.0949244 5.89802C0.0324984 6.02294 0 6.16068 0 6.30034C0 6.43999 0.0324984 6.57773 0.0949244 6.70266C2.03723 10.5882 5.48621 12.6007 9 12.6007C12.5129 12.6007 15.9628 10.5882 17.9051 6.70266C17.9675 6.57773 18 6.43999 18 6.30034C18 6.16068 17.9675 6.02294 17.9051 5.89802ZM9 10.8006C6.32776 10.8006 3.59791 9.3425 1.91662 6.30034C3.59791 3.25817 6.32686 1.8001 9 1.8001C11.6722 1.8001 14.4021 3.25817 16.0834 6.30034C14.4021 9.3425 11.6722 10.8006 9 10.8006Z" fill="#0D0D0D"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
