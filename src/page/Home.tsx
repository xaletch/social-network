import React from 'react'
import { AdvertisingBanner } from '../components/Home/AdvertisingBanner'
import { News } from '../components/Home/NewsFeed/News'
import { MyFriends } from '../components/Home/MyFriends/MyFriends'

export const Home = () => {
  return (
    <div className=''>
        <div className='container'>
            <div className='flex px-3 mt-20'>
                <AdvertisingBanner />
                <div className='w-full flex justify-end gap-6'>
                  <News />
                  <MyFriends />
                </div>
            </div>
        </div>
    </div>
  )
}
