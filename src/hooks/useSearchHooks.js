import React, { useState } from "react";
import { ICON } from "../assets/icons";

const useSearchHooks = ({badgeCount}) => {
  const [sideNavOptionsBackup, setSideNavOptionsBackup] = useState([]);
  const [sideNavOptionsBackup2, setSideNavOptionsBackup2] = useState([]);
  const [sideNavOptions, setSideNavOptions] = useState([
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
  const [sideNavOptions2, setSideNavOptions2] = useState([
    { id: 7, text: "Support", icon: <ICON.SupportIcon />, link: "/support" },
    { id: 8, text: "Settings", icon: <ICON.SettingIcon />, link: "/settings" },
  ]);

  const searchNavHandler = (data) => {
    if (data.length > 1) {
      const searchedResult = sideNavOptions.filter((option) =>
        option.text.toLowerCase().includes(data.toLowerCase())
      );
      const searchedResult2 = sideNavOptions2.filter((option) =>
        option.text.toLowerCase().includes(data.toLowerCase())
      );
      setSideNavOptions(searchedResult);
      setSideNavOptions2(searchedResult2);
    } else {
      if (sideNavOptionsBackup.length > 0 && sideNavOptionsBackup2.length > 0) {
        setSideNavOptions(sideNavOptionsBackup);
        setSideNavOptions2(sideNavOptionsBackup2);
      } else {
        setSideNavOptionsBackup(sideNavOptions);
        setSideNavOptionsBackup2(sideNavOptions2);
      }
    }
  };
  return [sideNavOptions, sideNavOptions2, searchNavHandler];
};

export default useSearchHooks;
