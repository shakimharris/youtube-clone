import React from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

function Header () {
    return (
        <div className="header">
            <div className="header__logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" className="App-logo" alt="logo" />
               <h4>This is the header </h4>
                <input type="text" />
                 <AccessAlarmIcon />
                
            </div>

        </div>
    )
}

export default Header;