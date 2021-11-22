import React from 'react';
import './videoCard.css';
import { Avatar } from '@mui/material';

export default function VideoCard({ title, channelName, channelImage, channel, thumbnailImage, views, timestamp}) {
    return (
        <div className="videoCard">
            <img className="thumbnail__image" src={thumbnailImage} />
            <div className="video-details">
                <Avatar
                 className="avatar-image"
                 src={channelImage}
                 alt={channel} />,
                <div className="video-text">
                    <h4>{title}</h4>
                    <p>{channelName}</p>
                    <p>{views} . {timestamp} </p>
                </div>
            </div>
        </div>
    )
}