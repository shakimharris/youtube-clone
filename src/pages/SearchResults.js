import React from 'react';
import ChannelRow from '../ChannelRow';
import FilterListIcon from '@mui/icons-material/FilterList';
import '../SearchResults.css';



function SearchResults() {
    return (
        <div className="searchResults">
             <div className="filterResults">
                 <FilterListIcon className="filter__icon" />
                    <h2>FILTER</h2>
                    </div>
                     <hr />
                    <ChannelRow
                    image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj"
                    description="An online school for teaching metaphysics and Egyptian Hieroglyphics"
                    noOfVideos={382}
                    channel="Amen Ra University"
                    verified={true}
                    subCount="655 K"
                    />
        </div>
        

    )
}

export default SearchResults;
