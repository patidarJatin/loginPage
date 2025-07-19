import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {
  return (
    <div>
       <nav className='flex justify-center  gap-5 m-3'>
        <NavLink style={(e)=>{
            return {color:e.isActive ? 'Tomato':''}
        }} to='/'>Home</NavLink>
        <NavLink className={(e)=>{
            return [
                e.isActive? 'text-red-500':' ',
                e.isActive? 'text-bold':' '
            ] .join(' ');
        }} to='/Contact'>Contact</NavLink>
        <NavLink to='/Service'>{(e)=>{
            return <span className={[e.isActive? 'text-red-500':' ',
                e.isActive? 'text-bold':' '
            ] .join(' ') }>Service</span>
        }
    }</NavLink>
      </nav>
    </div>
  )
}

export default Nav
