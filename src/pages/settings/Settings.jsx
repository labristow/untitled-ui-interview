import React, { useEffect, useRef, useState } from "react";
import Preload from "../../components/preload/Preload";
import SideBar from "../../components/sidebar/SideBar";
import Main from "./Main";

function SettingsPage() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const sidebarRef = useRef();
  const showSidebarHandle = () => {
    sidebarRef.current.classList.toggle("show__sidebar");
  };
  const hideSidebarHandle = () => {
    sidebarRef.current.classList.remove("show__sidebar");
  };
  useEffect(() => {
    loadingPageFadeIn();
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

  const loadingPageFadeIn = () => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 1500);
  };
  return (
    <React.Fragment>
      <div className="flex items-start bg-default-white">
        {!isPageLoaded && <Preload />}
        <SideBar
          sidebarRef={sidebarRef}
          showSidebarHandle={showSidebarHandle}
        />
        <Main showSidebarHandle={showSidebarHandle} />
      </div>
    </React.Fragment>
  );
}

export default SettingsPage;
