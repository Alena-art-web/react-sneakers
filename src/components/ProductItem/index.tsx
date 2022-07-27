import React, { useState } from 'react'
import GlobalSvgSelector from '../GlobalSvgSelector'
import s from './index.module.scss'
import { useAppDispatch } from '../../redux/store'
import { addItem, CartItem } from '../../redux/slices/cart'

type ProductItemProps = {
  _id: string;
  name: string;
  imageUrl: string;
  price: number
}

const ProductItem: React.FC<ProductItemProps> = ({imageUrl, name, price, _id}) => { // 
  const [activeButton, setActiveButton ] = useState(false)
  const [activeLike, setActiveLike] = useState(false)
  const [activeBox, setActiveBox] = useState(false)

  const dispatch = useAppDispatch()


  const onClickAdd = () => { 
    const item: CartItem = {
      _id,
      name,
      price,
      imageUrl,
      count: 0
    }

    setActiveButton(!activeButton)
    dispatch(addItem(item))
  }
  const onClickFavorites = () => setActiveLike(!activeLike)
  const onClickBox = () => {
    setActiveBox(!activeBox)
  }

  const wrapper = !activeBox ? s.wrapper : s.wrapper_active
  
  return (
    <div className={wrapper} onClick={onClickBox}>
      <div className={s.container}>
        <img src={imageUrl}/>
        <button className={s.btn__like} onClick={onClickFavorites}>
          {activeLike ? <GlobalSvgSelector id='active-like'/> : <GlobalSvgSelector id='like' />}
        </button>
        <div>{name}</div>
        <div className={s.price}>
          <div>
            <div className={s.title}>ЦЕНА:</div>
            <div className={s.text}>{price} грн.</div>
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