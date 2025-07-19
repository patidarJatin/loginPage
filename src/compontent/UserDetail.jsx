import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetail = () => {
  const{name}=useParams();
  const navigate= useNavigate();
  const GoBackHandle=()=>{
     navigate(-1)
  }
  return (
    <div className='w-1/2 p-3 m-auto mt-5'>
      <h1 className='text-3xl text-red-300 mb-2'>User Detail</h1>
      <h1 className='font-bold'> {name}</h1>
      <button onClick={GoBackHandle} className='bg-red-300 px-3 py-1 rounded-full'>Back</button>
    </div>
  )
}

export default UserDetail
