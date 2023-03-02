import React from 'react';
import user from  "../CSS/top-creators.css";
import "../CSS/variables.css";

import {Creators} from "../creators.js"

const TopCreators = () => {
  return (
    
    Creators.map( creator => {
        return(
          <div className="users_section">
            <a href='#' className="user">
              <a href="#" className="each_user">
                <div className="key">{creator.id}</div>
                <div className="user_avatar">
                    <img src={creator.avatar} className="avatar_img" alt="" />
                </div>
                <div className="user_details">
                  <h5 className="username">{creator.username}</h5>
                  <div className="total_sales_wrapper">
                    <p className="total_sales">Total Sales:<p className="sales_value">{creator.price} ETH</p></p>
                  </div>
                </div>
              </a>
            </a>
          </div> 
        )
    })
  )
}

export default TopCreators