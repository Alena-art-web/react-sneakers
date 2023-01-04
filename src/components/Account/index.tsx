import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchUserGetMe, selectGetUser } from '../../redux/slices/auth'
import { useAppDispatch } from '../../redux/store'
import GlobalSvgSelector from '../GlobalSvgSelector'
import MyDropzone from '../UploadFile'
import s from './index.module.scss'

const Account = () => {
  const user = useSelector(selectGetUser)
  
  return (
    <div>
      <h1>Welcome, {user?.fullName}!</h1>
      {user?.avatarUrl ? <img className={s.avatar} src={user?.avatarUrl}/> : <GlobalSvgSelector id='user-login'className={s.user_icon}/>}
      <MyDropzone/>
    </div>
  )
}

export default Account