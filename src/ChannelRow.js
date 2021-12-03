import React from 'react';
import './ChannelRow.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
function ChannelRow({
    image,
    subCount,
    noOfVideos,
    description,
    channel,
    verified
    }) {
        return (
            <div className="channelrow">
                <AccountCircleIcon className="circle__icon" alt={channel} src={image} />
                 <div className="channel__text">
                     <h4>
                     {channel} {verified && <VerifiedUserIcon />}    
                     </h4>
                     <p>
                         {subCount} Subscribers . {noOfVideos} Videos 
                     </p>
                     <p>{description}</p>
                 </div>
            </div>
        )
    }

export default ChannelRow
