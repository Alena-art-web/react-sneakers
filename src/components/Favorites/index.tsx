import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FavoriteItem, getFavoriteItem, removeFav } from '../../redux/slices/favorites'
import { useAppDispatch } from '../../redux/store'
import EmptyCart from '../EmptyCart'
import GlobalSvgSelector from '../GlobalSvgSelector'
import s from './index.module.scss'


const ItemFav: React.FC<FavoriteItem> = ({ imageUrl, name, price, _id, count }) => {
  const dispatch = useAppDispatch()

  const onClickRemove = () => {
    dispatch(removeFav(_id))
  }

  return (
    <div>
      <div className={s.container_item}>
        <img src={imageUrl} />
        <div>
          <div>{name}</div>

        </div>
        <div className={s.price}>{price} грн</div>
        <div>
          <button
            className={s.btn}
            onClick={onClickRemove}>
            <GlobalSvgSelector id='remove' />
          </button>
        </div>

      </div>
    </div>
  )
}
const Favorites = () => {
  const {data} = useSelector(getFavoriteItem)
 
  return (
    <div className={s.container}>
      {data.length > 0 ?
        <div>
          <div className={s.btn_clear}>
            <button>
              Очистить корзину
            </button>
          </div>
          <ul>
            {data.map(item => <ItemFav key={item._id} {...item} />)}
          </ul>
          <div className={s.price_block}>
            <div>Total Price:  грн</div>
            <button>Оформить заказ</button>
          </div>
        </div> :
        <EmptyCart />
      }
    </div>
  )
}

export default Favorites

