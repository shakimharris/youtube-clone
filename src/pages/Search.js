import React from 'react';
import SideBar from '../Sidebar';
import SearchResults from './SearchResults';
import '../Search.css';


function Search() {
    return (
        <div className="search">
            <div className="search__page">
            <SideBar />
             <SearchResults />
            </div>
        </div>
    )
}

export default Search;
