import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header () {
    return (
        <div className="header">
            <div className="header-left">
            <MenuIcon />
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" className="logo" />
             </div>
            <div className="header-center">
            <input placeholder="Search" type="text" />
            <SearchIcon className="search_icon" />
                </div>
                <div className="header-right">
                    <ViewModuleIcon className="header-icon" />
                    <FeaturedPlayListIcon className="header-icon" />
                    <AccountCircleIcon className="header-icon" />
                    </div>
            </div>

    )
}

export default Header;