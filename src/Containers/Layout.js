import React from 'react'
import { useLocation } from 'react-router-dom'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import NavbarCart from '../components/NavbarCart'

const Layout = (props) => {
  // console.log('props', props)
  const location = useLocation()
  // console.log('locacion',location.pathname)
  // if(location.pathname === "/cart") {
  //   return (
  //     <div>
  //       <NavbarCart />
  //       {props.children}    
  //     </div>

  //   )
  // }
  return (
    <div>
        <Navbar />  
        {props.children}    
        <Footer />
    </div>
  )
}

export default Layout