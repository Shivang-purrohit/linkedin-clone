import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className='header'>
    
    <div className='header__left'>
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
        <div className="header__search">
             <SearchIcon /> 
            <input type="text" />

        </div>

    </div>
    <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='home' />
        <HeaderOption  Icon={SupervisorAccountIcon} title='My network' />


    </div>
    
    </div>


  )
}

export default Header