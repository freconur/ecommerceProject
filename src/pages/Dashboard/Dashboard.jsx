import React from 'react'
import { AddProducts } from '../../components/AddProducts'
import './dashBoard.css'
import { SideBarDashBoard } from './SideBarDashBoard'
const Dashboard = () => {
  return (
    <div className='dashBoard'>
      <SideBarDashBoard />
      <AddProducts />
    </div>
  )
}

export default Dashboard