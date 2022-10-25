import React from 'react'
import { useDispatch } from 'react-redux'
import PrivateRoute from '../../PrivateRoute/PrivateRoute'
import { googleSignInInitiate } from '../../redux/action'
const Prueba = () => {
const dispatch = useDispatch()
    const handleClickGoogle = () => {
        dispatch(googleSignInInitiate())
    }

  return (
    <div >
      <PrivateRoute />
    </div>
  )
}

export default Prueba