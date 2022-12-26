import React from "react";
import { NavLink } from "react-router-dom";

const styleClasses = {
  activeClass:
    "flex bg-gray-50 hover:bg-gray-50 h-11 p-2 items-center relative my-1 transition-all duration-500",
  inactiveClass:
    "flex h-11 p-3 hover:bg-gray-50 p-2 items-center relative my-1 transition-all duration-500",
};
function SideNav({ id, text, icon, link, badgeCount }) {
  return (
    <NavLink
      to={link}
      key={id}
      className={({ isActive }) =>
        isActive ? styleClasses.activeClass : styleClasses.inactiveClass
      }
    >
      <li className="flex w-full items-center gap-3">
        <span className="nav__icon">{icon}</span>{" "}
        <span className="nav__text text-[15px] font-medium">{text}</span>
      </li>
      {badgeCount && (
        <span className="nav__badge absolute-right-3 h-6 min-w-[36px] bg-gray-200 rounded-xl font-medium text-sm flex items-center justify-center">
          {badgeCount}
        </span>
      )}
    </NavLink>
  );
}

export default SideNav;
