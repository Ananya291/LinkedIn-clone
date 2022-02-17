import React from 'react'
import './HeaderOptions.css'
import {Avatar} from '@material-ui/core';

function HeaderOptions({Icon,title,avatar}) {
  return (
    <div className='headerOption'> 
        {Icon && <Icon className="headerOption_icon"/>}
        {avatar && <Avatar className="headerOption_avatar"/>} 
        <h1 className='headerOption_title'>{title}</h1>
        </div>
  )
}

export default HeaderOptions