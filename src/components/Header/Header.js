import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FilterFramesIcon from '@material-ui/icons/FilterFrames';
import Avatar from '@material-ui/core/Avatar';

function Header () {

    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className='header'>
          <div className="header__left">
            <FilterFramesIcon className="header__symbol"/>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <div className="header__logo">MYSITE</div>
            </Link>
          </div>

          <div className="header__right">
            <Avatar
                alt='Nouman Ahmed'
                stc='https://avatars1.githubusercontent.com/u/35970677?s=60&v=4'
            />
            Kishore
            <NotificationsIcon className='header__icon'/>
          </div>
          
        </div>
    )
}

export default Header;
