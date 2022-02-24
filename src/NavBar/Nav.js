import React from 'react'
import './Nav.css'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOptions from './HeaderOptions';
import { useDispatch } from 'react-redux';
import { auth } from '../Firebase';
import { logout } from '../features/userSlice'

function Nav() {
  const dispatch = useDispatch();
  const logOutOfApp = () =>{
      dispatch(logout())
      auth.signOut();
  }

  return (
    <div className='header'>
      <div className="header_left">
        <img className='header_image'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png'
        />
        <div className="header_search">
          {/* searchIcone */}
          <SearchOutlinedIcon />
          <input type='text' placeholder='Search' />
        </div>
      </div>
      <div className="header_right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={PeopleIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterOutlinedIcon} title="Jobs" />
        <HeaderOptions Icon={MessageIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notification" />
        <HeaderOptions avatar={true} onClick={logOutOfApp} title="Me" />

      </div>

    </div>
  )
}

export default Nav
