import React from "react";
import SettingsTab from "../../../components/groupButton/SettingsTab";

function SettingMainHeader({settingTab, setSettingTab}) {
  return (
    <React.Fragment>
      <h4 className="header__title text-3xl font-semibold text-gray-900">
        Settings
      </h4>
      <p className="text-gray-500 text-md">
        Manage your team and preferences here.
      </p>
      <div className="mt-4 mb-9">
        <SettingsTab settingTab={settingTab} setSettingTab={setSettingTab} />
      </div>
    </React.Fragment>
  );
}

export default SettingMainHeader;
