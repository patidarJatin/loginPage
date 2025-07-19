import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../utilis/Context'

const Harish = () => {
   const {user,setuser}= useContext(UserContext)
   
  return (
    <div>
        <h1 className='text-3xl '>User List</h1>
        <div   className= 'bg-blue-100 m-3 flex flex-col '>{user.map((u)=>(
            <Link key={u.age} to={`/user/${u.age}`} >{u.age}</Link>
        ))}
        
        </div>
    </div>
  )
}

export default Harish
