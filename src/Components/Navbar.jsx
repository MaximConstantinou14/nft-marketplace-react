import React from 'react'
import "../CSS/navbar.css"
// Importing logo from assets
import logo from "../Assets/Images/nav_logo.svg"

// Importing icons from react icons
import { BsPerson } from "react-icons/bs";
import {CgMenuLeft} from "react-icons/cg"

const Navbar = () => {
  return (
    <nav>
        <a href="#" className="logo">
            <img src={logo} className="logo_img" alt="Logo Logo NFT Marketplace"/>
        </a>
        <ul className="nav_list">
            <li className="nav_item">
                <a href="#" className="nav_link">Marketplace</a>
            </li>
            <li className="nav_item">
                <a href="#" className="nav_link">Rankings</a>
            </li>
            <li className="nav_item">
                <a href="#" className="nav_link">Connect a wallet</a>
            </li>
            <li className="nav_item">
                <button className="nav_btn">
                    <a href="#" className="nav_btn_link"><BsPerson className='person_img' /> Sign Up</a>
                </button>
            </li>
        </ul>
        <button className="burger_btn">
            <CgMenuLeft className='burger_icon' />
        </button>
    </nav>
  )
}

export default Navbar