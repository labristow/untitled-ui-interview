import React from "react";
import { ICON } from "../../assets/icons";

function SearchInput() {
  return (
    <div className="w-full relative">
      <span className="search__icon absolute top-[10px] left-2">
        <ICON.SearchIcon />
      </span>
      <input
        type="text"
        placeholder="Search"
        className="w-full h-10 rounded-lg border border-gray-300 outline-none px-[36px] text-[14px]"
      />
    </div>
  );
}

export default SearchInput;
