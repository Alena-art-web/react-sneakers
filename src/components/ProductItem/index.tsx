import React, { useEffect, useMemo, useState } from 'react'
import GlobalSvgSelector from '../GlobalSvgSelector'
import s from './index.module.scss'
import { useAppDispatch } from '../../redux/store'
import { addItem, CartItem, removeItem } from '../../redux/slices/cart'
import { addtoFav, FavoriteItem, removeFav } from '../../redux/slices/favorites'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../redux/slices/auth'
import { Link} from 'react-router-dom'
import { act } from 'react-dom/test-utils'

type ProductItemProps = {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  activeFav: boolean;
  activeBtn: boolean;
}

const ProductItem: React.FC<ProductItemProps> = ({imageUrl, name, price, _id, activeFav, activeBtn}) => { 
  const [activeButton, setActiveButton ] = useState(activeBtn)
  const [activeLike, setActiveLike] = useState(activeFav)

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
    if (!activeButton) { 
      dispatch(addItem(item)) 
    } else {
      dispatch(removeItem(item._id))
    }
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
    !activeLike ? dispatch(addtoFav(item)) : dispatch(removeFav(item._id))
  }


  
  return (
    <div className={s.wrapper}>
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
            {activeButton ?  <GlobalSvgSelector id='done' /> : <GlobalSvgSelector id='plus' />} 
          </button> 
        </div>
      </div>
    </div>
  )
}

export default ProductItem