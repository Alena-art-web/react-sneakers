import { Link } from 'react-router-dom'
import emptyCart from '../../assets/img/empty-cart.png'
import GlobalSvgSelector from '../GlobalSvgSelector'
import s from './index.module.scss'

const EmptyFavorites = () => {
  return (
    <div className={s.container}>
        <div className={s.block}>
            <GlobalSvgSelector id='emptyFav'/>
            <div>Вы еще ничего не добавили в избранные</div>
            <Link to='/'><button>Вернуться назад</button></Link>
        </div>
        
    </div>
  )
}

export default EmptyFavorites