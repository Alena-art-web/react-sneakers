import React, { useState } from 'react'
import GlobalSvgSelector from '../GlobalSvgSelector'
import s from './index.module.scss'
import { useAppDispatch } from '../../redux/store'
import { addItem, CartItem } from '../../redux/slices/cart'
import { addtoFav, FavoriteItem } from '../../redux/slices/favorites'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../redux/slices/auth'
import { Link, Navigate } from 'react-router-dom'

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
  const isAuth = useSelector(selectCurrentUser)


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
  const onClickFavorites = () => {
    const item: FavoriteItem = {
      _id,
      name,
      price,
      imageUrl,
      count: 0
    }
    setActiveLike(!activeLike)
    dispatch(addtoFav(item))
  }
  const onClickBox = () => {
    setActiveBox(!activeBox)
  }

  const wrapper = !activeBox ? s.wrapper : s.wrapper_active
  
  return (
    <div className={wrapper} onClick={onClickBox}>
      <div className={s.container}>
        <img src={imageUrl}/>
        {isAuth ?
        <button className={s.btn__like} onClick={onClickFavorites}>
          {activeLike ? <GlobalSvgSelector id='active-like'/> : <GlobalSvgSelector id='like' />}
        </button> :
        <button className={s.btn__like} onClick={onClickFavorites}>
          <Link to='/login'><GlobalSvgSelector id='like' /></Link>
        </button>
        }
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