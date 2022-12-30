import React from 'react'
import { useSelector } from 'react-redux'
import { selectGetUser } from '../../redux/slices/auth'
import GlobalSvgSelector from '../GlobalSvgSelector'
import MyDropzone from '../UploadFile'
import s from './index.module.scss'

const Account = () => {
   const user = useSelector(selectGetUser)

  return (
    <div>
      <h1>Welcome, {user?.fullName}!</h1>
      {user?.avatarUrl ? <img src={user?.avatarUrl}/> : <GlobalSvgSelector id='user-login'className={s.user_icon}/>}
      <MyDropzone/>
    </div>
  )
}

export default Account