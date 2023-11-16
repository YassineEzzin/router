import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
function RootLayout() {
  return (
    <div className='RootLoyout' >
        <nav>
           <NavLink to='/' >Home</NavLink>
           <NavLink to='/About' >About</NavLink>
        </nav>
      <main>
        <Outlet/>
      </main>
    </div>
    
  )
}

export default RootLayout
