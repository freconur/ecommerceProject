import React from 'react'

const ItemsOrdersUser = ({order}) => {
  console.log('order',order)
  return (
    <ul className='info_order__user'>
      {
        order.map((item,index) => {
          return(
            <li key={index}>
              <img src={item.image} alt="" />
              <span className='name_product__order'>{item.name}</span>
              <span>price: S/ {item.price}</span>
              <span>cantidad: {item.OrderProduct.amount}</span>

            </li>
          )
        })
      }
    </ul>
  )
}

export {ItemsOrdersUser}