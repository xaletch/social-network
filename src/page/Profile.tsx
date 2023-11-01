import React from 'react'
import { Head } from '../components/Profile/Head'
import { CreateNewPost } from '../components/Profile/CreateNewPost'

export const Profile = () => {
  return (
    <div className=''>
      <div className='container'>
        <div className='px-3 mt-24'>
          <Head />
          <CreateNewPost />
        </div>
      </div>
    </div>
  )
}
