import React from "react"
import logo from "../images/troll-face.png"


const Header = () => {
    return (
        <div className="header">
            <img src={logo} className="header--logo"/>
            <h3 className="header--title">Meme Generator</h3>
            <h4 className="header--subtitle">React Course - Project 3</h4>
        </div>
    )
}

export default Header