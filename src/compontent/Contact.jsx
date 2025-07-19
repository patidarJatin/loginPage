import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='w-1/2 p-3 m-auto mt-5'>
    <h1 className='text-3xl'>Contact</h1>
    <div className='flex w-1/2 flex-col mt-5'>
      <Link className='p-3 bg-red-300 mb-3' to='/Contact/Jone'>Jone</Link>
      <Link className='p-3 bg-red-300 mb-3' to='/Contact/Mon'>Mon</Link>
      <Link className='p-3 bg-red-300 mb-3' to='/Contact/son'>son</Link>
    </div>
    <Outlet/>
  </div>
  
  )
}

export default Contact
