import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData, UserProfile } from "./NavData";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import "./Nav.css";


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  function handleLogoutClick() {
    console.log("User clicked on Logout");
  }
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <h2>MailReach</h2>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" >
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars" onClick={showSidebar} >
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName} onClick={showSidebar}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          <ul className="nav-bottom">
            <div className="nav-dropdown">
              <Link to="#" className="dropNav-text">
                {UserProfile.icon}
                <span>{UserProfile.title}</span>
              </Link>
              <ul className="dropdown-menu">
                <li className={UserProfile.dropdown[0].cName}>
                  <Link to={UserProfile.dropdown[0].path}>
                    {UserProfile.dropdown[0].title} {UserProfile.dropdown[0].icon}
                  </Link>
                  <hr />
                </li>
                <li className={UserProfile.dropdown[1].cName}>
                  <Link to={UserProfile.dropdown[1].path} onClick={handleLogoutClick}>
                    {UserProfile.dropdown[1].title} {UserProfile.dropdown[1].icon}
                  </Link>
                  <hr />
                </li>
              </ul>
            </div>
          </ul>
          
          <div className="social">
            © Copyright 2023 <br/>
              <hr/>
            <button onClick={() => {
              window.open("https://github.com/Adi-tya-shukla");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/shukla-adityaa//");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("mailto:shuklaji247@gmail.com");
            }}
              className='socailmediabtn'><AiFillMail className='icon' /></button>
            <button onClick={() => {
              window.open("https://wa.me/8827340717");
            }}
              className='socailmediabtn'><FaWhatsapp className='icon' /></button>

          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
