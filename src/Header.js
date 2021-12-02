import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header () {
   const [searchInput, setSearchInput] = useState("");

    return (
        <div className="header">
            <div className="header-left">
             <MenuIcon />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" className="logo" />
              </div>
                <div className="header-center">
                 <input value={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder="Search" type="text" />
                  <Link to={`/search/${searchInput}`}>
                    <SearchIcon className="search_icon" />
                      </Link>
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