import React from 'react'
import GlobalSvgSelector from '../GlobalSvgSelector'
import s from './index.module.scss'
import img from '../../assets/img/sneakers.jpg'

const ProductItem = () => {
  return (
    <div className={s.container}>
      <div>
        <img src={img}/>
        <h3 className={s.title}>Мужские Кроссовки Nike Blazer Mid Suede</h3>
        <div>
          <div>
            <div>ЦЕНА:</div>
            <div>2500 грн.</div>
          </div>
          <GlobalSvgSelector id='plus'/>
        </div>
      </div>
    </div>
  )
}

export default ProductItem