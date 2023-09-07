import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "All Mails",
    path: "/home",
    icon: <FaIcons.FaMailBulk />,
    cName: "nav-text",
  },
  {
    title: "Compose",
    path: "/",
    icon: <IoIcons.IoMdPaperPlane />,
    cName: "nav-text",
  },
 
  {
    title: "Unread",
    path: "/",
    icon: <FaIcons.FaRegEnvelope />,
    cName: "nav-text",
  },
  {
    title: "Trash",
    path: "/",
    icon: <FaIcons.FaTrash/>,
    cName: "nav-text",
  },
  {
    title: "Draft",
    path: "/",
    icon: <IoIcons.IoMdMailOpen/>,
    cName: "nav-text",
  },
  
  {
    title: "Support",
    path: "/",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  
];

export const UserProfile = {
    title: "User123",
    path: "/profile",
    icon: <FaIcons.FaUserCircle />,
    cName: "nav-text",
    dropdown: [
      { title: "Profile", path: "/profile", cName: "dropdown-link", icon : <FaIcons.FaUserEdit/> },
      { title: "Logout", path: "/login",  cName: "dropdown-link" , icon : <FaIcons.FaSignOutAlt/> },
    ],
  };