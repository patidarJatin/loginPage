import React, { useState } from 'react'
import Jatin from './compontent/Jatin'
import {Link, Route, Routes} from 'react-router-dom'
import Harish from './compontent/Harish'
import Virendra from './compontent/Virendra'
import Detail from './compontent/Detail'
const App = () => {

  return (
    <div className='p-5 container w-1/2 m-auto'>
      <nav className='mt-10 flex justify-center mb-5 gap-10 font-bold'>
        <Link to='/'>Jatin</Link>
        <Link to='/Harish'>Harish</Link>
        <Link to='/Virendra'>Virendra</Link>
      </nav>
      <Routes>
       <Route path='/' element={<Jatin />}/>
       <Route path='/Harish' element={<Harish />}/>
       <Route path='/Harish/:age' element={<Detail/>} />
         <Route path='/Virendra' element={<Virendra />}/>
      </Routes>
    
    </div>
  )
}

export default App
