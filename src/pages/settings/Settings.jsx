import React, { useEffect, useRef } from "react";
import SideBar from "../../components/sidebar/SideBar";
import Main from "./Main";

function SettingsPage() {
  const sidebarRef = useRef();
  const showSidebarHandle = () => {
    sidebarRef.current.classList.toggle("show__sidebar");
  };
  const hideSidebarHandle = () => {
    sidebarRef.current.classList.remove("show__sidebar");
  };
  useEffect(() => {
    window.addEventListener("resize", ScreenSizeCheck);
    return () => {
      window.removeEventListener("resize", ScreenSizeCheck);
    };
  }, []);
  const ScreenSizeCheck = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 767) {
      hideSidebarHandle();
    }
  };
  return (
    <div className="flex items-start bg-default-white">
      <SideBar sidebarRef={sidebarRef} showSidebarHandle={showSidebarHandle} />
      <Main showSidebarHandle={showSidebarHandle} />
    </div>
  );
}

export default SettingsPage;
