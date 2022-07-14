import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo-header.svg'
import GlobalSvgSelector from '../GlobalSvgSelector'
import s from './index.module.scss'

const Header = () => {
    return (
        <div className={s.container}>
            <div className={s.title_container}>
                <img src={logo} alt="Logo" />
                <div className={s.title_block}>
                    <h1>React Sneakers</h1>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <div>
                <div className={s.icon_container}>
                    <div>
                        <Link to='/cart'><GlobalSvgSelector id='cart'/></Link>
                        <span>5500 грн.</span>
                    </div>
                    <div className={s.favorites}>
                        <Link to='/favorites'><GlobalSvgSelector id='favorites'/></Link>
                        <span>5</span>
                    </div>
                    <Link to='/user'><GlobalSvgSelector id='user'/></Link>
                </div>
            </div>
        </div>
    )
}

export default Header