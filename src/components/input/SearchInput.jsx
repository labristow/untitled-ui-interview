import React, { useState } from "react";
import { ICON } from "../../assets/icons";

function SearchInput({ searchNavHandler }) {
  const [val, setVal] = useState("");

  const onChange = (e) => {
    setVal(e.target.value);
    searchNavHandler(e.target.value);
  };
  return (
    <div className="w-full relative">
      <span className="search__icon absolute top-[10px] left-2">
        <ICON.SearchIcon />
      </span>
      <input
        onChange={onChange}
        value={val}
        type="text"
        placeholder="Search"
        className="w-full h-10 rounded-lg border border-gray-300 outline-none px-[36px] text-[14px]"
      />
    </div>
  );
}

export default SearchInput;
