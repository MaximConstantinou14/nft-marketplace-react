import React from 'react'
import "../CSS/variables.css"
import "../CSS/trending-collection.css"

// Importing images for trending collection
import DSGNONE from "../Assets/Trending Collection Images/DSGN Animals Dog.svg"
import DSGNTWO from "../Assets/Trending Collection Images/DSGN Animals Cat.svg"
import DSGNTHREE from "../Assets/Trending Collection Images/DSGN Animals Bear.svg"
import DSGNPFP from "../Assets/Trending Collection Images/DSGN Animals pfp.svg"

import MUSHROOMONE from "../Assets/Trending Collection Images/MM One.svg"
import MUSHROOMTWO from "../Assets/Trending Collection Images/MM Two.svg"
import MUSHROOMTHREE from "../Assets/Trending Collection Images/MM Three.svg"
import MUSHROOMPFP from "../Assets/Trending Collection Images/MM pfp.svg"

import DISCOONE from "../Assets/Trending Collection Images/DC One.svg"
import DISCOTWO from "../Assets/Trending Collection Images/DC Two.svg"
import DISCOTHREE from "../Assets/Trending Collection Images/DC Three.svg"
import DISCOPFP from "../Assets/Trending Collection Images/DC pfp.svg"

const trendingCollection = () => {
  return (
    <section className="trending_collection">
        <header className="trending_collection_head">
            <h1 className="trending_collection_title">Trending Collection</h1>
            <p className="trending_collection_description">Checkout our weekly updated trending collection.</p>
        </header>
        
        <div className="collections_wrapper">
            <div className="collection_one">
                <a href="#" className="collection_main_link">
                    <img src={DSGNONE} alt="" className="collection_one_main_img" />
                </a>
                <div className="collection_one_nft_list">
                    <a href="#" className="collection_list_link">
                        <img src={DSGNTWO} alt="" className="collection_one_list_img" />
                    </a>
                    <a href="#" className="collection_list_link">
                        <img src={DSGNTHREE} alt="" className="collection_one_list_img" />
                    </a>
                    <a href="#" className="collection_list_link">
                        <p className="collection_one_list_nums">1025+</p>
                    </a>
                </div>
                <h3 className="collection_one_name">DSGN Animals</h3>
                <div className="collection_one_artist">
                    <a href="#" className="pfp_link">
                        <img src={DSGNPFP} alt="" className="collection_one_artist_pfp" />
                    </a>
                    <p className="collection_one_artist_name">MrFox</p>
                </div>
            </div>
    
            <div className="collection_two">
                <a href="#" className="collection_main_link">
                    <img src={MUSHROOMONE} alt="" className="collection_two_main_img" />
                </a>
                <div className="collection_two_nft_list">
                    <a href="#" className="collection_list_link">
                        <img src={MUSHROOMTWO} alt="" className="collection_two_list_img" />
                    </a>
                    <a href="#" className="collection_list_link">
                        <img src={MUSHROOMTHREE} alt="" className="collection_two_list_img" />
                    </a>
                    <a href="#" className="collection_list_link">
                        <p className="collection_two_list_nums">6+</p>
                    </a>
                </div>
                <h3 className="collection_two_name">Magic Mushrooms</h3>
                <div className="collection_two_artist">
                    <img src={MUSHROOMPFP} alt="" className="collection_two_artist_pfp" />
                    <p className="collection_two_artist_name">Shroomie</p>
                </div>
            </div>
    
            <div className="collection_three">
                <a href="#" className="collection_main_link">
                    <img src={DISCOONE} alt="" className="collection_three_main_img" />
                </a>
                <div className="collection_three_nft_list">
                    <a href="#" className="collection_list_link">
                        <img src={DISCOTWO} alt="" className="collection_three_list_img" />
                    </a>
                    <a href="#" className="collection_list_link">
                        <img src={DISCOTHREE} alt="" className="collection_three_list_img" />
                    </a>
                    <a href="#" className="collection_list_link">
                        <p className="collection_three_list_nums">132+</p>
                    </a>
                </div>
                <h3 className="collection_three_name">Disco Machines</h3>
                <div className="collection_three_artist">
                    <img src={DISCOPFP} alt="" className="collection_three_artist_pfp" />
                    <p className="collection_three_artist_name">BeKind2Robots</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default trendingCollection;