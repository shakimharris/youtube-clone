import React from 'react';
import './ChannelRow.css';
import Avatar from '@mui/material/Avatar';
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
                <Avatar className="channel__image" src={image} />
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
