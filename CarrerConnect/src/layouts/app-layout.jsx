import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'


const AppLayout = () => {
  return (
    <div>
      <div className='grid-background'></div>

      <main className='px-15 min-h-screen container'>
       <Header />
       <Outlet />
      </main>

      <div className='p-10 text-center bg-gray-800 mt-10'>
          CarrerConnect
      </div>
    </div>
  )
}



export default AppLayout
