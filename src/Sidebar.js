import React from 'react'
import Raccoon from './raccoon.png'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <img src={Raccoon} alt='logo' className='icon' />
        <SidebarOption active Icon={HomeIcon} text='Home' />
        <SidebarOption Icon={SearchIcon} text='Explore' />
        <SidebarOption Icon={NotificationsNoneIcon} text='Notifications' />
        <SidebarOption Icon={MailOutlineIcon} text='Messages' />
        <SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks' />
        <SidebarOption Icon={ListAltIcon} text='Lists' />
        <SidebarOption Icon={PermIdentityIcon} text='Profile' />
        <SidebarOption Icon={MoreHorizIcon} text='More' />

        {/* Tweet Button */}
        <Button variant='outlined' className='sidebar__tweet' fullWidth>Screm</Button>
    </div>
  )
}

export default Sidebar