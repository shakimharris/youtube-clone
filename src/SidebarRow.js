import React from 'react';
import './SidebarRow.css';

export default function SidebarRow({ Icon, title }){
 return (
    <div className="sidebar-row">
        <Icon />
        <h1>{title}</h1>

    </div>
)
}