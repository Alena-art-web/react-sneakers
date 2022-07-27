import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem, clear, getCartItem, removeItem } from '../../redux/slices/cart'
import { useAppDispatch } from '../../redux/store'
import EmptyCart from '../EmptyCart'
import GlobalSvgSelector from '../GlobalSvgSelector'
import s from './index.module.scss'




const ItemCart: React.FC<CartItem> = ({ imageUrl, name, price, _id, count }) => {
    const dispatch = useAppDispatch()

    const onClickRemove = () => {
        dispatch(removeItem(_id))
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

const Cart: React.FC = () => {
    const { items, totalPrice } = useSelector(getCartItem)
    const dispatch = useAppDispatch()

    const onClickClear = () => {
        dispatch(clear())
    }

    return (
        <div className={s.container}>
            {items.length > 0 ?
            <div> 
                <div className={s.btn_clear}>
                    <button onClick={onClickClear}>
                        Очистить корзину
                    </button>                                  
                </div>
                <ul>
                    {items.map(item => <ItemCart key={item._id} {...item} />)}
                </ul>
                <div className={s.price_block}>
                    <div>Total Price: {totalPrice} грн</div>
                    <button>Оформить заказ</button>
                </div>
            </div>:
            <EmptyCart/>
            }
        </div>
    )
}

export default Cart