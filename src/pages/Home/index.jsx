import React from "react";
import { Products } from "../../components/Products";
import { Category } from "../../components/Category";
import './home.css'
import { useSelector } from "react-redux";
const Home = () => {
  const userReducer = useSelector(rootReducer => rootReducer)
 return (
  <div>
    <div className="pro">
    <div className="header_container">
      <img className="mini_header" src="https://firebasestorage.googleapis.com/v0/b/ecommerce-eacb4.appspot.com/o/ecommerce%2FCaptura%20desde%202022-10-19%2018-11-50.png?alt=media&token=fded5bf4-898f-4bbb-89b9-6f70b70e2376" alt="header" />
      <img className="image" src="https://firebasestorage.googleapis.com/v0/b/ecommerce-eacb4.appspot.com/o/ecommerce%2Fcaptura-header.png?alt=media&token=dd3ea19c-7b66-4e45-a7de-dd62aaa9bc84" alt="header" />
    </div>
    </div>
    <Category />
  </div>
 )
 }
export { Home }
