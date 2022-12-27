import React, { useState, useEffect } from "react";
import { ICON } from "../../assets/icons";
import SearchInput from "../input/SearchInput";
import Hr from "../line/Hr";
import FeaturedImage from "./FeaturedImage";
import ProfileBar from "./ProfileBar";
import SideNav from "./SideNav";
import styles from "./sidebar.module.css";
import SidebarHead from "./SidebarHead";
import useSearchHooks from "../../hooks/useSearchHooks";

function SideBar({ sidebarRef, showSidebarHandle }) {
  const [badgeCount] = useState(10);
  const [sideNavOptions, sideNavOptions2, searchNavHandler] =
    useSearchHooks(badgeCount);

  return (
    <div
      ref={sidebarRef}
      className={`${styles.sidebar} custom__scrollbar hidden md:block w-[280px] h-screen bg-white md:px-4 pb-6 md:py-8 overflow-hidden overflow-y-scroll`}
    >
      <SidebarHead showSidebarHandle={showSidebarHandle} />
      <div className="sidebar__search mt-6 px-8 md:px-0">
        <SearchInput searchNavHandler={searchNavHandler} />

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
