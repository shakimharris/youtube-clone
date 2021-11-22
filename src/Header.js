import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header () {
    return (
        <div className="header">
            <div className="header__logo">
            <MenuIcon />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" className="App-logo" alt="logo" />
               <h4>This is the header </h4>
                <input type="text" />
                <SearchIcon />
                <MicIcon />
                <ViewModuleIcon />
                <FeaturedPlayListIcon />
                <AccountCircleIcon />
                
            </div>

        </div>
    )
}

export default Header;