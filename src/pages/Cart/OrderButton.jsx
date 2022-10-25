import React from 'react'

const OrderButton = ({
    handleCreateOrder
}) => {
  return (
    <>
        <button onClick={handleCreateOrder} className='order_button'> ir a comprar</button>
    </>
  )
}   

export {OrderButton}