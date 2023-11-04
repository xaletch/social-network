import React from 'react'
import { Head } from '../components/Profile/Head'
import { CreateNewPost } from '../components/Profile/CreateNewPost'

interface DataInterface {
  avatarUrl?: string | undefined,
  name?: string | undefined,
  surname?: string | undefined,
  username?: string | undefined,
}

type Data = {
  userData: DataInterface | undefined
}

export const Profile: React.FC<Data> = ({ userData }) => {
  return (
    <div className=''>
      <div className='container'>
        <div className='px-3 mt-24'>
          <Head avatarUrl={userData?.avatarUrl} name={userData?.name} surname={userData?.surname} username={userData?.username} />
          <CreateNewPost />
        </div>
      </div>
    </div>
  )
}
