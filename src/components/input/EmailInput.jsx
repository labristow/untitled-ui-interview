import React from "react";
import { ICON } from "../../assets/icons";

function EmailInput({ isActive }) {
  return (
    <div className="w-full relative">
      <span className="search__icon absolute top-[10px] left-3">
        <ICON.EmailIcon />
      </span>
      <input
        disabled={!isActive}
        type="text"
        placeholder="billing@untitledui.com"
        className="w-full h-10 rounded-lg border border-gray-300 outline-none px-[39px] text-[14px]"
      />
    </div>
  );
}

export default EmailInput;
