import React, { useState } from 'react'
import GlobalSvgSelector from '../GlobalSvgSelector'
import s from './index.module.scss'
import img from '../../assets/img/sneakers.jpg'

type ProductItemProps = {
  id: string;
  name: string;
  imgUrl: string;
  price: number
}

const ProductItem: React.FC = () => { // {imgUrl, name, price, id}
  const [activeButton, setActiveButton ] = useState(false)
  const [activeLike, setActiveLike] = useState(false)
  const [activeBox, setActiveBox] = useState(false)

  const onClickAdd = () => setActiveButton(!activeButton)
  const onClickFavorites = () => setActiveLike(!activeLike)
  const onClickBox = () => setActiveBox(!activeBox)

  const wrapper = !activeBox ? s.wrapper : s.wrapper_active

  return (
    <div className={wrapper} onClick={onClickBox}>
      <div className={s.container}>
        <img src={img}/>
        <button className={s.btn__like} onClick={onClickFavorites}>
          {activeLike ? <GlobalSvgSelector id='active-like'/> : <GlobalSvgSelector id='like' />}
        </button>
        <div>Мужские Кроссовки Nike Blazer Mid Suede</div>
        <div className={s.price}>
          <div>
            <div className={s.title}>ЦЕНА:</div>
            <div className={s.text}>2500 грн.</div>
          </div>
          <button className={s.btn__add} onClick={onClickAdd}>
            {activeButton ?   <GlobalSvgSelector id='done' /> : <GlobalSvgSelector id='plus' />}
          </button>
            
        </div>
      </div>
    </div>
  )
}

export default ProductItem