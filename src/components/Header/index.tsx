import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo-header.svg'
import { logout, selectCurrentUser, selectGetUser } from '../../redux/slices/auth'
import { getCartItem } from '../../redux/slices/cart'
import { getFavoriteItem } from '../../redux/slices/favorites'
import { useAppDispatch } from '../../redux/store'
import GlobalSvgSelector from '../GlobalSvgSelector'
import s from './index.module.scss'

const Header = () => {
    const isAuth = useSelector(selectCurrentUser)
    const user = useSelector(selectGetUser)
    const { items, totalPrice } = useSelector(getCartItem)
    const { data } = useSelector(getFavoriteItem)
    const dispatch = useAppDispatch()
    const onClickLogout = () => {
        dispatch(logout())
        localStorage.removeItem('token')
    }

    useEffect(() => {
        const json = JSON.stringify(items)
        localStorage.setItem('cart', json)

        const jsonFav = JSON.stringify(data)
        localStorage.setItem('favorites', jsonFav)
    }, [items, data])


    return (
        <div className={s.container}>
            <div className={s.title_container}>
                <Link to='/'><img src={logo} alt="Logo" /></Link>
                <div className={s.title_block}>
                    <h1>React Sneakers</h1>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <div>
                <div className={s.icon_container}>
                    <div>
                        <Link to='/cart'><GlobalSvgSelector id='cart' /></Link>
                        <span>{totalPrice} грн.</span>
                    </div>
                    <div className={s.favorites}>
                        <Link to='/favorites'>
                            <GlobalSvgSelector id='favorites' />
                        </Link>
                        <span>{data.length}</span>
                    </div>
                    {isAuth && <button className={s.logout} onClick={onClickLogout}>Log Out</button>}
                    {isAuth ?
                        <Link to='/user'>
                            <img className={s.avatar} src={user?.avatarUrl} />
                        </Link> :
                        <Link to='/login'>
                            <GlobalSvgSelector id='user' />
                        </Link>}
                </div>
            </div>
        </div>
    )
}

export default Header