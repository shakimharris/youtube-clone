import React from 'react';
import './SidebarRow.css';

function SidebarRow({ Icon, title }){
 return (
    <div className="sidebar-row">
        <Icon />
        <h1>{title}</h1>

    </div>
)
}

export default SidebarRow;