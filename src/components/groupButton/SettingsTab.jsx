import React from "react";
import tabs from "./shared/settingsTabMenu.json";

function SettingsTab({ settingTab, setSettingTab }) {
  const showTab = (_name) => {
    setSettingTab(_name);
  };
  return (
    <div className="flex items-center w-full h-20 md:h-auto overflow-x-scroll lg:overflow-hidden custom__scrollbar">
      {tabs.map(({ text, name }, index) => (
        <button
          onClick={() => showTab(name)}
          className={`border ${
            name === settingTab ? "bg-gray-100" : "bg-white"
          }  ${index === 0 && "rounded-tl-lg rounded-bl-lg"} ${
            index === tabs.length - 1 && "rounded-tr-lg rounded-br-lg"
          } py-2.5 px-4 text-sm font-medium border-gray-200 h-10 flex items-center justify-center`}
        >
          {text}
        </button>
      ))}
    </div>
  );
}

export default SettingsTab;
