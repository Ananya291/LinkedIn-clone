import React from 'react'
import './HeaderOptions.css'
import { Avatar } from '@material-ui/core';
import {useSelector} from 'react-redux'
import {selectUser} from '../features/userSlice'

function HeaderOptions({ Icon, title, avatar, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_avatar">
        {user?.email[0]}
        </Avatar>}
      <h1 className='headerOption_title'>{title}</h1>
    </div>
  )
}

export default HeaderOptions