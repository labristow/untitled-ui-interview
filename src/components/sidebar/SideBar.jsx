import React, { useState, useEffect } from "react";
import { ICON } from "../../assets/icons";
import SearchInput from "../input/SearchInput";
import Hr from "../line/Hr";
import FeaturedImage from "./FeaturedImage";
import ProfileBar from "./ProfileBar";
import SideNav from "./SideNav";
import styles from "./sidebar.module.css";
import SidebarHead from "./SidebarHead";

function SideBar({ sidebarRef, showSidebarHandle }) {
  const [badgeCount] = useState(10);
  const [sideNavOptions, setNavOptions] = useState([
    { id: 1, text: "Home", icon: <ICON.HomeIcon />, link: "/" },
    {
      id: 2,
      text: "Dashboard",
      icon: <ICON.DashboardIcon />,
      link: "/dashboard",
      badgeCount: badgeCount,
    },
    { id: 3, text: "Projects", icon: <ICON.ProjectIcon />, link: "/projcts" },
    { id: 4, text: "Tasks", icon: <ICON.TaskIcon />, link: "/tasks" },
    {
      id: 5,
      text: "Reporting",
      icon: <ICON.ReportingIcon />,
      link: "/reporting",
    },
    { id: 6, text: "Users", icon: <ICON.UserIcon />, link: "/users" },
  ]);
  const [sideNavOptions2, setNavOptions2] = useState([
    { id: 7, text: "Support", icon: <ICON.SupportIcon />, link: "/support" },
    { id: 8, text: "Settings", icon: <ICON.SettingIcon />, link: "/settings" },
  ]);
  useEffect(() => {}, []);

  return (
    <div
      ref={sidebarRef}
      className={`${styles.sidebar} custom__scrollbar hidden md:block w-[280px] h-screen bg-white md:px-4 pb-6 md:py-8 overflow-hidden overflow-y-scroll`}
    >
      <SidebarHead showSidebarHandle={showSidebarHandle}/>
      <div className="sidebar__search mt-6 px-8 md:px-0">
        <SearchInput />

        <ul className="sidebar__navlist mt-6">
          {sideNavOptions.map(({ id, text, icon, link, badgeCount }) => (
            <SideNav
              key={id}
              text={text}
              icon={icon}
              link={link}
              badgeCount={badgeCount}
            />
          ))}
        </ul>
        <ul className="sidebar__navlist mt-4">
          {sideNavOptions2.map(({ id, text, icon, link, badgeCount }) => (
            <SideNav
              key={id}
              text={text}
              icon={icon}
              link={link}
              badgeCount={badgeCount}
            />
          ))}
        </ul>
        <FeaturedImage />
        <div className="py-6 flex">
          <Hr />
        </div>
        <div className="profile__seaction">
          <ProfileBar />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
