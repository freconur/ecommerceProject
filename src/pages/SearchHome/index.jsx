import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsReducer } from '../../redux/reducer/productsReducer'

const SearchHome = () => {
    const { products } = useSelector(rootReducer => rootReducer.productsReducer)
    const dispatch = useDispatch()
    console.log('products',products)
    // useEffect(() => {
    //     dispatch(productsReducer())
    // })
  return (
    <div>
        <ul>
        {products.map(item => (
            <li>
                {item.name}
            </li>
        ))}

        </ul>
    </div>
  )
}

export {SearchHome}