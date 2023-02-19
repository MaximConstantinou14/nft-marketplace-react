import React from 'react'
import "../CSS/intro.css"
import "../CSS/variables.css"

// Importing Images from assets
import introArt from "../Assets/Images/imageplaceholder.svg"
import animaKidPfp from "../Assets/Images/animakid_pfp.png"

// Importing icons from react icons
import {TbRocket} from "react-icons/tb"

const Intro = () => {
  return (
    <div className="intro">

        <div className="intro_left">
            <h1 className="intro_left_title">
                Discover Digital Art & Collect NFTs
            </h1>
            <p className="intro_left_description">
                NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
            </p>
            <div className="intro_right_mobile">
                <div className="intro_right_card">
                    <img src={introArt} className="intro_art" alt="Intro Image NFT Art" />
                    <h2 className="intro_right_card_title">Space Walking</h2>
                    <div className="intro_right_card_user">
                        <img src={animaKidPfp} className="anima_pfp" alt="Animakid user image" />
                        <p className="intro_right_card_username">Animakid</p>
                    </div>
                </div>
            </div>
            <a href="#" className="intro_left_btn_link">
                <button className="intro_left_btn">
                    <p className="intro_left_btn_text"><TbRocket className="rocket_icon" /> Get Started</p>
                </button>
            </a>
            <div className="intro_left_stats">
                <div className="total_sale_stats">
                    <h3 className="stat_nums">240k+</h3>
                    <p className="stat_title">Total Sale</p>
                </div>
                <div className="auctions_stats">
                    <h3 className="stat_nums">100k+</h3>
                    <p className="stat_title">Auctions</p>
                </div>
                <div className="artists_stats">
                    <h3 className="stat_nums">240k+</h3>
                    <p className="stat_title">Total Artists</p>
                </div>
            </div>
        </div>

        <div className="intro_right_desktop">
            <div className="intro_right_card">
                <img src={introArt} className="intro_art" alt="Intro Image NFT Art" />
                <h2 className="intro_right_card_title">Space Walking</h2>
                <div className="intro_right_card_user">
                    <img src={animaKidPfp} alt="Animakid user image" />
                    <p className="intro_right_card_username">Animakid</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro
