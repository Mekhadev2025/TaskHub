import React from 'react'
import "../Navbar/Navbar.css"
import logo from "../../assets/images/logo.svg"
import title from "../../assets/images/TaskHub.svg"
const Navbar = () => {
  return (
    <nav className='navContainer'>
      <img className="logo" src={logo}></img>
      <img src={title}></img>
    </nav>
  )
}

export default Navbar
