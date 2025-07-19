import React from 'react'

function Navbar() {
  return (
    <>
    <div>
        <nav className='flex items-center justify-between '>
            <h1 className='px-3 font-bold text-2xl'>Designer</h1>
            <ul className='flex md:hidden gap-14 px-5 py-1'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Product</a></li>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar