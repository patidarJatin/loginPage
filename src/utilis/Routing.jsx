import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../compontent/Home'
import Contact from '../compontent/Contact'
import Service from '../compontent/Service'
import UserDetail from '../compontent/UserDetail'

const Routing = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}>
        <Route path='/Contact/:name' element={<UserDetail/>}/>
        </Route>
        
        <Route path='/Service' element={<Service/>}/>
      </Routes>
    </div>
  )
}

export default Routing
