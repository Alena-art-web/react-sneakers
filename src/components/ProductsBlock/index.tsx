import React from 'react'
import ProductItem from '../ProductItem'
import s from './index.module.scss'

const ProductsBlock = () => {

  const items = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <div>
      <ul className={s.container}>
        {items.map( (i, index) => 
          <li  
            key={index} 
            className={s.item}
          >
            <ProductItem/>
          </li>
        )}
      </ul>
      
    </div>
  )
}

export default ProductsBlock