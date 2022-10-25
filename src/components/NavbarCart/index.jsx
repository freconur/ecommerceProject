import React from 'react'
import { Link } from 'react-router-dom'
import './navbarCart.css'
const NavbarCart = ({}) => {
  return (
    <div className="navbar_cart" >
    {/* <div className={` "navbar_cart" ${ valueNavbar ? "activeNavbarCart" : "disabledNavbarCart"}`}> */}
        <Link to="/">
        <img
            className="navbar__brand"
            src="https://firebasestorage.googleapis.com/v0/b/ecommerce-eacb4.appspot.com/o/wikzon.png?alt=media&token=8e9b1cd4-6ebb-46d7-ab3d-1893c2e73f55"
            alt=""
          />
        </Link>
    </div>
  )
}

export default NavbarCart