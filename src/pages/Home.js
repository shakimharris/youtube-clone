import React from 'react';
import Recommended from '../Recommended';
import Sidebar from '../Sidebar';
import '../App.css';

function Home() {
    return (
        <div className="Home">
             <div className="app__page">
               <Sidebar />
                <Recommended />
              </div>
             </div>
    )
}

export default Home;
