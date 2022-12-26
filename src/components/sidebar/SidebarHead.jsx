import React from "react";
import { ICON } from "../../assets/icons";
import BrandLogo from "../../assets/svgs/logo.svg";

function SidebarHead({showSidebarHandle}) {
    const doNothing = () => {}
  return (
    <div className="sidebar__header bg-white md:bg-transparent h-16 flex items-center justify-between pr-4 md:h-8 relative">
      <img
        className="md:absolute w-[300px] md:w-[279px] md:h-[32px] -left-5 top-0 flex"
        src={BrandLogo}
        alt="Untitled__logo__not__found"
      />

      <button onClick={showSidebarHandle ? showSidebarHandle : doNothing} className="block md:hidden">
        <ICON.MenuIcon />
      </button>
    </div>
  );
}

export default SidebarHead;
