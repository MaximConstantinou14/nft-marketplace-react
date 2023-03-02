import React from 'react';
import "../CSS/top-creators-header.css";

import {TbRocket} from "react-icons/tb";

const TopCreatorsHeader = () => {
  return (
    <div className="top_creators_header_container">
        <div className="top_creators_details">
            <h1 className="top_creators_title">Top Creators</h1>
            <p className="top_creators_description">Checkout Top Rated Creators on the NFT Marketplace</p>
        </div>
        <button className="rankings_btn"><TbRocket /> View Rankings</button>
    </div>
  )
}

export default TopCreatorsHeader