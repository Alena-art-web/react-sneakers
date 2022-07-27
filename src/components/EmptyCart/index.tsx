import { Link } from 'react-router-dom'
import emptyCart from '../../assets/img/empty-cart.png'
import s from './index.module.scss'

const EmptyCart = () => {
  return (
    <div className={s.container}>
        <div className={s.block}>
            <img src={emptyCart}/>
            <div>Корзина пуста</div>
            <Link to='/'><button>Вернуться назад</button></Link>
        </div>
        
    </div>
  )
}

export default EmptyCart