import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HomeIcon from '@mui/icons-material/Home';


export default function Sidebar(){
    return(
        <div className="sidebar">
            <SidebarRow Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
            <SidebarRow Icon ={WhatshotIcon} title="Trending" />
        </div>
    )
}