import React from 'react'

import { NewsPost } from './Posts/NewsPost';

export const News = () => {
  return (
    <div className='grid gap-6 w-[600px]'>
      <NewsPost/>
      <NewsPost/>
      <NewsPost/>
      <NewsPost/>
      <NewsPost/>
      <NewsPost/>
    </div>
  )
}
