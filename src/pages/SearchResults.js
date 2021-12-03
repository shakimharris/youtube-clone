import React from 'react';
import ChannelRow from '../ChannelRow';
import TunedOutlinedIcon from '@mui/icons-material/TurnedInOutlined';


function SearchResults() {
    return (
        <div className="searchResults">
            <h1>These are the search results.</h1>
             <div className="filterResults">
                 <TunedOutlinedIcon />
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
