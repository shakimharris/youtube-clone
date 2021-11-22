import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function Sidebar(){
    return(
        <div className="sidebar">
            <SidebarRow Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
            <SidebarRow Icon ={WhatshotIcon} title="Trending" />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="Watch Videos" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
            <SidebarRow Icon={HistoryIcon} title="Video History" />
            <SidebarRow Icon={OndemandVideoIcon} title="On Demand" />
            <SidebarRow Icon={ExpandMoreIcon} title="See More" />
            <SidebarRow Icon={ThumbUpOffAltIcon} title="Likes" />
            <hr />
        </div>
    )
}